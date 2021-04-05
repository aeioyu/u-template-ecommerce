export interface ProductPageProps {
  product: {
    sku: string;
    name: string;
    price: number;
  };
  cart: {
    id: string;
    qty: number;
  };
  onAddToCart: () => boolean;
}
