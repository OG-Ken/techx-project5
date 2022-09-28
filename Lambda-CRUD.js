//Consistent data that will be used throughout the code.
const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-2'
});
const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'cafeteria-inventory';
const healthPath = '/health';
const userPath = '/user';
const cafeteriaPath = '/cafeteria';
const adminPath = '/admin';

//This is the APT handler. It takes the event path along with the method from the API and call a logic function to process the data on the table.
exports.handler = async function(event) {
    console.log('Request event: ', event);
    let response; 
    switch(true){
        case event.httpMethod === 'GET' && event.path === healthPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === 'GET' && event.path === userPath:
            response = await getUserMenu(event.queryStringParameters.meal_ID);
            break;
        case event.httpMethod === 'GET' && event.path === cafeteriaPath:
            response = await getCafeteria();
            break;
        case event.httpMethod === 'PATCH' && event.path === userPath:
            const requestBody = JSON.parse(event.body);
            response = await modifyQuantity(requestBody.meal_ID, requestBody.updateKey, requestBody.updateValue);
            break;
        case event.httpMethod === 'POST' && (event.path === userPath || event.path === adminPath):
            response = await createMeal(JSON.parse(event.body));
            break;
        case event.httpMethod === 'DELETE' && event.path === adminPath:
            response = await deleteItem(JSON.parse(event.body).meal_ID);
            break;
        default:
            response = buildResponse(69420, '69-420 Ya don goofed up A-A-Ron');
    }
    return response;
};
//The following below are functions that are being called based on the handler case method from above

//Logic that handles GET for individual users
async function getUserMenu(meal_ID) {
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'meal_ID': meal_ID
        }
    };
    return await dynamodb.get(params).promise().then((response) => {
        return buildResponse(200, response.Item);
    }, (error) => {
        console.error('There was an issue handling the response for the User Menu items', error);
    });
}
//Logic that handles GET for the Cafeteria staff
async function getCafeteria() {
    const params = {
        TableName: dynamodbTableName
    };
    const allItems = await scanDynamoRecords(params, []);
    const body = allItems;
    return buildResponse(200, body);
}
//Logic called to do a full table scan. This is called separately 
async function scanDynamoRecords(scanParams, itemArray) {
    try {
        const dynamoData = await dynamodb.scan(scanParams).promise();
        itemArray = itemArray.concat(dynamoData.Items);
        if (dynamoData.LastEvaluatedKey) {
            scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey;
            return await scanDynamoRecords(scanParams, itemArray);
        }
        return itemArray;
    }   catch(error) {
        console.error('There was an issue handling the response for the All item Scan', error);
    }
}
//Logic to create a new meal item
async function createMeal (requestBody) {
    const params = {
        TableName: dynamodbTableName,
        Item: requestBody
    };
    return await dynamodb.put(params).promise().then(() =>{
        const body = {
            Operation: 'Save',
            Message: 'Success',
            Item: requestBody
        };
        return buildResponse(200, body);
    }, (error) => {
        console.error('There was an issue handling the response for the Create Meal', error);
    });
}
//Logic to modify an exsisting item
async function modifyQuantity(meal_ID, updateKey, updateValue) {
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'meal_ID': meal_ID
        },
        UpdateExpression: `set ${updateKey} = :value `,
        ExpressionAttributeValues:{
            ':value': updateValue
        },
        ReturnValues: 'UPDATED_NEW'
    };
    return await dynamodb.update(params).promise().then((response) => {
        const body = {
            Operation: 'Update',
            Message: 'Success',
            Item: response
        };
        return buildResponse(200, body);
    }, (error) => {
        console.error('There was an issue handling the response for the Update Item', error);
    });
}
//Logic to delete items
async function deleteItem(meal_ID) {
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'meal_ID': meal_ID
        },
        ReturnValues: 'ALL_OLD'
    };
    return await dynamodb.delete(params).promise().then((response) => {
        const body = {
            Operation: 'Delete',
            Message: 'Success',
            Item: response
        };
        return buildResponse(200, body);
    }, (error) => {
        console.error('There was an issue handling the response for the Delete Item', error);
    });
}
//Logic to build default response 
function buildResponse (statusCode, body) {
    return{
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body)
    };
}
