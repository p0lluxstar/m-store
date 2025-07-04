import { JSX } from 'react';

import styles from '../styles/components/checkmark.module.scss';

interface IProps {
  checkmarkColor: string;
}

const Checkmark = ({ checkmarkColor }: IProps): JSX.Element => {
  return (
    <div>
      <div className={styles.checkmarkWrapper}>
        <div
          className={styles.checkmark}
          style={{ ['--checkmark-color' as string]: checkmarkColor }}
        />
      </div>
    </div>
  );
};

export default Checkmark;
