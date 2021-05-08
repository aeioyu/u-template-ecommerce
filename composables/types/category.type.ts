export interface CategoryModel {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  menu_order: number;
  parent: number;
}
