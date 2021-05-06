import { UseQueryResult, useQuery } from 'react-query';
import axios from 'axios';

export interface CategoriesModel {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  menu_order: number;
  parent: number;
}

async function getCategories(): Promise<CategoriesModel[]> {
  const { data } = await axios.get(`/api/categories`);
  return data;
}

export function useCategories(): UseQueryResult<CategoriesModel[]> {
  return useQuery('categories', getCategories, {
    retry: false,
  });
}

export default useCategories;
