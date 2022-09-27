// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Meal } = initSchema(schema);

export {
  User,
  Meal
};