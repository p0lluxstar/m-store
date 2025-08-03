import { JSX } from 'react';

import ClientFeedbackSlider from '@/components/about/ClientFeedbackSlider';
import OurCompany from '@/components/about/OurCompany';
import OurTeam from '@/components/about/OutTeam';
import Breadcrumbs from '@/components/Breadcrumbs';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import { STORE_NAME } from '@/constants';

const title = "О нас"

export const metadata = {
  title: `${title} | ${STORE_NAME}`,
  description: 'Узнайте больше о нашей компании и команде.',
};

const pageLink = [{ label: title, href: '/about' }];

export default function AboutPage(): JSX.Element {
  return (
    <MainWrapper>
      <PageHeaderArea title={title}/>
      <div className="mx-[auto] my-[0] px-[40px] max-[500px]:px-[20px] max-w-[1200px]">
        <Breadcrumbs pageLink={pageLink} />
        <OurCompany />
        <OurTeam />
        <ClientFeedbackSlider />
      </div>
    </MainWrapper>
  );
}
