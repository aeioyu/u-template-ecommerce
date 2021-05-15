import { useQuery } from 'react-query';
import graphqlSDK from '@/graphql/graphql-sdk';
import { CategoriesFieldFragment } from '@/graphql/generated';

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
