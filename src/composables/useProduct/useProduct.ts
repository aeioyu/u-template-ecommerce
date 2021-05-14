function useProduct() {
  const getProduct = (sku: string): any => {
    console.log(sku);

    return {
      sku: 'name',
      name: 'string',
      price: 100.5,
    };
  };

  return {
    getProduct: getProduct,
  };
}

export default useProduct;
