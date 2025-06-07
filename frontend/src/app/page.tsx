import { JSX } from 'react';

import MainHeader from '@/components/header/MainHeader';
import ProductList from '@/components/ProductList';

export default function Home(): JSX.Element {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <ProductList />
      </main>
      <footer></footer>
    </div>
  );
}
