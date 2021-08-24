import { ProductListFieldFragment, RootQueryToProductConnectionWhereArgs } from '@/graphql/generated';
import graphqlSDK from '@/graphql/graphql-sdk';
import { UseQueryOptions, UseQueryResult, useQuery } from 'react-query';

interface fetchProductSearchParams {
  first?: number;
  after?: string;
  where?: RootQueryToProductConnectionWhereArgs;
}

export async function fetchProductSearch(params: fetchProductSearchParams): Promise<ProductListFieldFragment> {
  const data = await graphqlSDK.Products({ first: params.first, after: params.after, where: params.where });
  return data?.products;
}

export function useProductSearch(searchParams: fetchProductSearchParams, options?: UseQueryOptions<any>) {
  const products: UseQueryResult<ProductListFieldFragment> = useQuery(
    ['products', searchParams],
    () => fetchProductSearch(searchParams),
    options,
  );

  return {
    products: products?.data,
    isFetching: products?.isFetching,
    error: products?.error,
  };
}

export default useProductSearch;
