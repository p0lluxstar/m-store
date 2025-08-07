import { JSX } from 'react';

import styles from '../../styles/components/header/headerTop.module.scss';
import InfoTopItems from '../InfoTopItems';

const HeaderTop = (): JSX.Element => {
  return (
    <div className="bg-gray-200 py-2.5 ">
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="flex justify-between px-[40px] max-[900px]:justify-center max-[500px]:px-[20px]">
          <div className={styles['header-top-start']}>
            <div className={styles['desc']}>
              <p className="text-center">Бесплатный возврат и бесплатная доставка по всей России</p>
            </div>
          </div>
          <div className="max-[900px]:hidden">
            <InfoTopItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
