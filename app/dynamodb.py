import boto3

# Create a dynamodb table to store game points


def create_table():
    table_name = 'Meals_Menu'

    client = boto3.client('dynamodb')
    response = client.list_tables()
    if table_name in response['TableNames']:
        table_found = True
        return

    table = dynamodb.create_table(
        TableName=table_name,
        KeySchema=[
            {
                'AttributeName': 'MealID',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'MealID',
                'AttributeType': 'N'
            }
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 5,
            'WriteCapacityUnits': 5
        }
    )
    print(f"Creating {table_name} table...")
    table.wait_until_exists()
    return table

# Store game scores to db table


def store_meal_orders(table, quantity):
    table = dynamodb.Table('Meal')

    rand_4 = random.sample([*range(10)], 4)
    OrderID = 0
    for i in rand_4:
        OrderID += i

    # put item in table
    table.put_item(
        Item={
            'Order': OrderID,
            'Quantity': quantity
        }
    )

    print(f"\n\nYour meal order is stored in the databse")
