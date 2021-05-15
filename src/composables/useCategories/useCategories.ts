import { useQuery } from 'react-query';
import graphqlSDK from '@/libs/graphql-sdk';
import { ProductCategoriesQuery } from '../generated';

async function fetchCategories(): Promise<ProductCategoriesQuery> {
  const { data } = await graphqlSDK.productCategories();
  return data;
}

// export function formatCategories(categories: ProductCategoriesQuery): CategoryModel[] {
//   const categoriesNodes = categories?.productCategories?.nodes;
//   const categorieFormated = categoriesNodes?.map((category) => ({
//     id: category.databaseId,
//     name: category.name,
//     slug: category.slug,
//     parent: category.parentId,
//   }));

//   return categorieFormated;
// }

export function useCategories() {
  const categories = useQuery<ProductCategoriesQuery, Error>('categories', () => fetchCategories());

  return {
    categories: categories?.data?.productCategories?.nodes,
    isFetching: categories.isFetching,
    error: categories.error,
  };
}

export default useCategories;
