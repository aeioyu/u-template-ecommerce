import { UseQueryResult, useQuery, UseQueryOptions } from 'react-query';
import axios from 'axios';
import { ProductModel, ProductSearchParams } from '@/composables/types/product.type';

export async function getProductSearch(
  searchParams: ProductSearchParams,
  options = { hostname: '' },
): Promise<ProductModel[]> {
  return axios({ url: `/api/products`, params: searchParams, baseURL: options.hostname }).then((res) => res.data);
}

export function useProductSearch(searchParams: ProductSearchParams, options?: UseQueryOptions<any>) {
  const products: UseQueryResult<ProductModel[]> = useQuery(
    ['products', searchParams],
    () => getProductSearch(searchParams),
    options,
  );

  return {
    products,
  };
}

export default useProductSearch;
