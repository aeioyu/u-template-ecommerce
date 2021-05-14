import { useQuery } from 'react-query';
import GraphqlSDK from '@/libs/graphql-sdk';
import { ProductCategoriesQuery } from '../generated';
import { CategoryModel } from '../types/category.type';

export function formatCategories(categories: ProductCategoriesQuery): CategoryModel[] {
  const categoriesNodes = categories?.productCategories?.nodes;
  const categorieFormated = categoriesNodes?.map((category) => ({
    id: category.databaseId,
    name: category.name,
    slug: category.slug,
    parent: category.parentId,
  }));

  return categorieFormated;
}

export function useCategories() {
  const categories = useQuery<CategoryModel[], Error>('categories', () =>
    GraphqlSDK.productCategories().then(({ data }) => formatCategories(data)),
  );

  return {
    categories,
  };
}

export default useCategories;
