import { useEffect } from 'react';
import useProductViewModel from '@/hooks/useProductViewModel';
import { ProductPageProps } from './ProductPageType';

function useProductPageController(sku: string): ProductPageProps {
  const { getProduct } = useProductViewModel();

  useEffect(() => {
    getProduct(sku);
  }, [sku]);

  return {
    product: {
      sku: 'name',
      name:
        'Notebook Lenovo Yoga S940-14IIL(81Q80092TA) Intel Core i7-1065G7/Ram8GB/1TB SSD M.2 2280 PCIe/14" UHD/Integrated Intel Iris Plus Graphics/Windows 10 Home',
      price: 100.5,
    },
    cart: {
      id: 'string',
      qty: 2,
    },
    onAddToCart: () => {
      console.log('cart added');
      return true;
    },
  };
}

export default useProductPageController;
