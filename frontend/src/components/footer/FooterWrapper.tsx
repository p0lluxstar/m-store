import { JSX } from 'react';

import FooterMain from './FooterMain';
import FooterBottom from './FotterBottom';

const FooterWrapper = (): JSX.Element => {
  return (
    <footer className="bg-[#26292e]">
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};

export default FooterWrapper;
