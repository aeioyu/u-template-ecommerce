import { CategoriesFieldFragment } from '@/graphql/generated';
import graphqlSDK from '@/graphql/graphql-sdk';
import { useQuery } from 'react-query';

async function fetchCategories(): Promise<CategoriesFieldFragment> {
  const data = await graphqlSDK.productCategories();
  return data.productCategories;
}

export function useCategories() {
  const categories = useQuery<CategoriesFieldFragment, Error>('categories', fetchCategories);

  return {
    categories,
  };
}

export default useCategories;
