import { JSX } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/contacts/ContactForm';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import { STORE_NAME } from '@/constants';

const title = 'Контакты';

export const metadata = {
  title: `${title} | ${STORE_NAME}`,
  description: 'Узнайте больше о нашей компании и команде.',
};

const pageLink = [{ label: title, href: '/contact' }];

export default function ContactPage(): JSX.Element {
  return (
    <MainWrapper>
      <PageHeaderArea title={title} />
      <div className="mx-[auto] my-[0] px-[40px] max-[500px]:px-[20px] max-w-[1200px]">
        <Breadcrumbs pageLink={pageLink} />
        <ContactForm />
      </div>
    </MainWrapper>
  );
}
