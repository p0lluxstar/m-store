'use client';

import { useParams } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';

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

const ProductCategory = (): JSX.Element => {
  const { category } = useParams() as { category: string };
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const res = await fetch(`http://localhost:4000/categories/products?handle=${category}`);
        if (!res.ok) {
          throw new Error(`Ошибка при запросе: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data);
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
      <h1>ProductList</h1>
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

export default ProductCategory;
