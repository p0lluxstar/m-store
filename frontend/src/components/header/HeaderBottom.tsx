import { JSX } from 'react';

import MainMenu from '../MainMenu';

const HeaderBottom = (): JSX.Element => {
  return (
    <div className="">
      <div className="max-w-[var(--content-max-width)] mx-auto px-[40px] max-[500]:px-[20px]">
        <div className="max-[900px]:hidden">
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
