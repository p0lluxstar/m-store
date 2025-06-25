'use client';

import { JSX, useEffect, useState } from 'react';

import Loader from '@/components/Loader';
import MainWrapper from '@/components/main/MainWrapper';
import OrderFlow from '@/components/OrderFlow';
import PageHeaderArea from '@/components/PageHeaderArea';

const CartPage = (): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <MainWrapper>
      <PageHeaderArea />
      {hasMounted ? (
        <>
          <OrderFlow />
        </>
      ) : (
        <Loader backgroundColor="#eb3e32" />
      )}
    </MainWrapper>
  );
};

export default CartPage;
