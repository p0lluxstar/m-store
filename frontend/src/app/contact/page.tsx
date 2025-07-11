import { JSX } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/contacts/ContactForm';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';

const pageLink = [{ label: 'Контакты', href: '/contact' }];

export default function ContactPage(): JSX.Element {
  return (
    <MainWrapper>
      <PageHeaderArea />
      <div className="mx-[auto] my-[0] px-[40px] max-[500px]:px-[20px] max-w-[1200px]">
        <Breadcrumbs pageLink={pageLink} />
        <ContactForm />
      </div>
    </MainWrapper>
  );
}
