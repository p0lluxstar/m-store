'use client';
import { useEffect, useState } from 'react';
import { medusa } from '../../../medusa-config';

interface Product {
  id: string;
  title: string;
  description: string;
  variants?: Array<{
    prices: Array<{
      amount: number;
      currency_code: string;
    }>;
  }>;
}

const ProductList = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products } = await medusa.store.product.list({
          fields: `*variants.calculated_price`,
          region_id: 'reg_01JWRDG8DY2GDMAK48EY1BJ9MF',
        });

        setProducts(products);
      } catch (err) {
        console.error('Ошибка:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Товары</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              {product.variants[0]?.calculated_price?.calculated_amount && (
                <p>Цена: {product.variants[0]?.calculated_price?.calculated_amount}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Товары не найдены</p>
      )}
    </div>
  );
};

export default ProductList;
