export interface ProductModel {
  id: number;
  name: string;
  sku: string;
  slug: string;
  images: {
    alt: string;
    id: number;
    name: string;
    src: string;
  }[];
  parent_id: number;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  virtual: boolean;
}

export interface ProductSearchParams {
  page?: number;
  per_page?: number;
  category?: string;
  order?: string;
  orderBy?: string;
}
