export const FilterAndSortProducts = (
  products,
  sortBy: string,
  minPrice: number,
  maxPrice: number,
  nameProduct: string
) => {
  // Фильтрация по имени товара или ID
  const filteredByNameOrId = nameProduct
    ? products.filter((product) => {
        // Ищем по названию
        const matchesName = product.title.toLowerCase().includes(nameProduct);

        // Ищем по последним 6 символам ID
        const productId = product.id || '';
        const matchesId = productId.slice(-6).toUpperCase() === nameProduct;

        return matchesName || matchesId;
      })
    : products;

  // Фильтрация по цене
  const filteredProducts = filteredByNameOrId.filter((product) => {
    const price = product.variants?.[0]?.calculated_price?.calculated_amount ?? 0;
    return (
      (minPrice === undefined || price >= minPrice) && (maxPrice === undefined || price <= maxPrice)
    );
  });

  // Сортировка
  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = a.variants?.[0]?.calculated_price?.calculated_amount ?? 0;
    const priceB = b.variants?.[0]?.calculated_price?.calculated_amount ?? 0;
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    switch (sortBy) {
      case 'price_asc':
        return priceA - priceB;
      case 'price_desc':
        return priceB - priceA;
      case 'title_asc':
        return titleA.localeCompare(titleB);
      case 'title_desc':
        return titleB.localeCompare(titleA);
      default:
        return 0;
    }
  });

  return sortedProducts;
};
