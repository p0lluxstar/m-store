import { JSX } from 'react';

import HeaderBottom from './HeaderBottom';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';

const HeaderWrapper = (): JSX.Element => {
  return (
    <header>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
};

export default HeaderWrapper;
