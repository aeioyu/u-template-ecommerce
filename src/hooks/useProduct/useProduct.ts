import { ProductFieldFragment } from '@/graphql/generated';
import graphqlSDK from '@/graphql/graphql-sdk';
import { UseQueryOptions, UseQueryResult, useQuery } from 'react-query';

async function fetchProduct(productId: string): Promise<ProductFieldFragment> {
  const product = await graphqlSDK.Product({ productId: productId });
  return product.product;
}

function useProduct(productId: string, options?: UseQueryOptions<any>) {
  const product: UseQueryResult<ProductFieldFragment> = useQuery(
    ['products', productId],
    () => fetchProduct(productId),
    {
      enabled: Boolean(productId),
      ...options,
    },
  );

  return {
    product: product?.data,
    isFetching: product?.isFetching,
    error: product?.error,
  };
}

export default useProduct;
