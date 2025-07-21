import { JSX } from 'react';

import MainMenu from '../MainMenu';

const HeaderBottom = (): JSX.Element => {
  return (
    <div className="px-[40px]">
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="max-[900px]:hidden">
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
