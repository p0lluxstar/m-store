'use client';

import { JSX, useEffect, useState } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import Loader from '@/components/Loader';
import MainWrapper from '@/components/main/MainWrapper';
import OrderFlow from '@/components/order/OrderFlow';
import PageHeaderArea from '@/components/PageHeaderArea';

const title = 'Корзина';
const pageLink = [{ label: title, href: '/cart' }];

const CartPage = (): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <MainWrapper>
      <PageHeaderArea title={title} />
      <div className="mx-[auto] my-[0] px-[40px] max-[500px]:px-[20px] max-w-[1200px]">
        <Breadcrumbs pageLink={pageLink} />
        {hasMounted ? <OrderFlow /> : <Loader backgroundColor="#eb3e32" />}
      </div>
    </MainWrapper>
  );
};

export default CartPage;
