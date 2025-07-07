'use client';

import { JSX, useEffect, useState } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import Loader from '@/components/Loader';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import WishListTable from '@/components/wishlist/WishListTable';

const pageLink = [{ label: 'Избранное', href: '/wishlist' }];

const WishListPage = (): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <MainWrapper>
      <PageHeaderArea />
       <Breadcrumbs pageLink={pageLink} />
       {hasMounted ? <WishListTable /> : <Loader backgroundColor="#eb3e32" />}
    </MainWrapper>
  );
};

export default WishListPage;
