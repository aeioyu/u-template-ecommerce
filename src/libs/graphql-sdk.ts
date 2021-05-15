import { getSdk } from '@/composables/generated';
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL;

const client = new GraphQLClient(endpoint, {
  // credentials: 'include',
  timeout: 60000,
});
const graphqlSDK = getSdk(client);

export default graphqlSDK;
