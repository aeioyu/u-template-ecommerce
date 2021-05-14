import { getSdk } from '@/composables/generated';
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL;

const client = new GraphQLClient(endpoint);
const graphqlSDK = getSdk(client);

export default graphqlSDK;
