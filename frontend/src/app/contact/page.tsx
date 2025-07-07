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
      <Breadcrumbs pageLink={pageLink} />
      <ContactForm />
    </MainWrapper>
  );
}
