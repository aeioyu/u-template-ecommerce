import { useQuery } from 'react-query';
import axios from 'axios';
import { CategoryModel } from '@/composables/types/category.type';

async function fetchCategories(): Promise<CategoryModel[]> {
  const { data } = await axios.get(`/api/categories`);
  return data;
}

export function useCategories() {
  const categories = useQuery<CategoryModel[], Error>('categories', fetchCategories, {
    retry: false,
  });

  return {
    categories,
  };
}

export default useCategories;
