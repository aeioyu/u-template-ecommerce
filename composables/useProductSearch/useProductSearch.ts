import { UseQueryResult, useQuery, UseQueryOptions } from 'react-query';
import axios from 'axios';
import { ProductModel, ProductSearchParams } from '@/composables/types/product.type';

async function getProductSearch(searchParams: ProductSearchParams): Promise<ProductModel[]> {
  return axios.get(`/api/products`, { params: searchParams }).then((res) => res.data);
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
