import { JSX } from 'react';

import FooterMain from './FooterMain';
import FooterBottom from './FotterBottom';

const FooterWrapper = (): JSX.Element => {
  return (
    <footer className="bg-[#26292e] mt-[60px]">
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};

export default FooterWrapper;
