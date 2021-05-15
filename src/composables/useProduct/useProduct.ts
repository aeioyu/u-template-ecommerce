import { UseQueryResult, useQuery, UseQueryOptions } from 'react-query';
import graphqlSDK from '@/libs/graphql-sdk';
import { ProductQuery } from '../generated';

async function fetchProduct(productId: string): Promise<ProductQuery> {
  const { data } = await graphqlSDK.Product({ productId: productId });
  return data;
}

export function useProduct(productId: string, options?: UseQueryOptions<any>) {
  const productQuery: UseQueryResult<ProductQuery> = useQuery(['products', productId], () => fetchProduct(productId), {
    enabled: Boolean(productId),
    ...options,
  });

  return {
    product: productQuery?.data?.product,
    isFetching: productQuery?.isFetching,
    error: productQuery?.error,
  };
}

export default useProduct;
