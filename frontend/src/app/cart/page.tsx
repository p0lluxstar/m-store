'use client';

import { JSX, useEffect, useState } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import Loader from '@/components/Loader';
import MainWrapper from '@/components/main/MainWrapper';
import OrderFlow from '@/components/order/OrderFlow';
import PageHeaderArea from '@/components/PageHeaderArea';

const pageLink = [{ label: 'Корзина', href: '/cart' }];

const CartPage = (): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <MainWrapper>
      <PageHeaderArea />
      <Breadcrumbs pageLink={pageLink} />
      {hasMounted ? <OrderFlow /> : <Loader backgroundColor="#eb3e32" />}
    </MainWrapper>
  );
};

export default CartPage;
