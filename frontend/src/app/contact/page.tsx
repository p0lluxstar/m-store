import { JSX } from 'react';

import ContactForm from '@/components/contacts/ContactForm';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';

export default function ContactPage(): JSX.Element {
  return (
    <MainWrapper>
      <PageHeaderArea />
      <ContactForm />
    </MainWrapper>
  );
}
