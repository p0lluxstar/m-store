import { JSX } from 'react';

import FooterWrapper from '@/components/footer/FooterWrapper';
import HeaderWrapper from '@/components/header/HeaderWrapper';
import MainWrapper from '@/components/main/MainWrapper';

export default function Home(): JSX.Element {
  return (
    <div>
      <HeaderWrapper />
      <MainWrapper />
      <FooterWrapper />
    </div>
  );
}
