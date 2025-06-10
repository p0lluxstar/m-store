'use client';

import Link from 'next/link';
import { JSX, useEffect, useState } from 'react';

interface Category {
  id: string;
  name: string;
  handle: string;
}

const ProductCategories = (): JSX.Element => {
  const [products, setProducts] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const res = await fetch('http://localhost:4000/categories');
        if (!res.ok) {
          throw new Error(`Ошибка при запросе: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
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
      <h1>Categories</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((category) => (
            <li key={category.id}>
              <Link href={`/shop/${category.handle}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Категории не найдены</p>
      )}
    </div>
  );
};

export default ProductCategories;
