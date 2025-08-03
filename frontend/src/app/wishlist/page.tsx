'use client';

import { JSX, useEffect, useState } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import Loader from '@/components/Loader';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import WishListTable from '@/components/wishlist/WishListTable';

const title = 'Избранное';
const pageLink = [{ label: title, href: '/wishlist' }];

const WishListPage = (): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <MainWrapper>
      <PageHeaderArea title={title}/>
      <div className="mx-[auto] my-[0] px-[40px] max-[500px]:px-[20px] max-w-[1200px]">
        <Breadcrumbs pageLink={pageLink} />
        {hasMounted ? <WishListTable /> : <Loader backgroundColor="#eb3e32" />}
      </div>
    </MainWrapper>
  );
};

export default WishListPage;
