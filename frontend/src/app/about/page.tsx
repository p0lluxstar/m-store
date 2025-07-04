import { JSX } from 'react';

import ClientFeedbackSlider from '@/components/about/ClientFeedbackSlider';
import OurCompany from '@/components/about/OurCompany';
import OurTeam from '@/components/about/OutTeam';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';

export const metadata = {
  title: 'О нас — M-Store',
  description: 'Узнайте больше о нашей компании и команде.',
};

export default function AboutPage(): JSX.Element {
  return (
    <MainWrapper>
      <PageHeaderArea />
      <OurCompany />
      <OurTeam />
      <ClientFeedbackSlider />
    </MainWrapper>
  );
}
