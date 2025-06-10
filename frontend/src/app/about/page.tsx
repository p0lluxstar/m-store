import { JSX } from 'react';

import MainWrapper from '@/components/main/MainWrapper';

export const metadata = {
  title: 'О нас — M-Store',
  description: 'Узнайте больше о нашей компании и команде.',
}

export default function AboutPage(): JSX.Element {
  return (
    <MainWrapper>
      <h1>AboutPage</h1>
    </MainWrapper>
  );
}
