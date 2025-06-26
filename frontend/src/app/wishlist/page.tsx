'use client';

import { JSX, useEffect, useState } from 'react';

import Loader from '@/components/Loader';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import WishListTable from '@/components/wishlist/WishListTable';

const WishListPage = (): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <MainWrapper>
      <PageHeaderArea />
       {hasMounted ? <WishListTable /> : <Loader backgroundColor="#eb3e32" />}
    </MainWrapper>
  );
};

export default WishListPage;
