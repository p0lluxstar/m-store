import { JSX } from 'react';

import FooterBottom from './FooterBottom';
import FooterMain from './FooterMain';

const FooterWrapper = (): JSX.Element => {
  return (
    <footer className="bg-[#26292e] mt-[60px]">
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};

export default FooterWrapper;
