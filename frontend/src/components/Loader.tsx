import { JSX } from 'react';

import styles from '../styles/components/loader.module.css';

interface IProps {
  backgroundColor: string;
}

const Loader = (props: IProps): JSX.Element => {
  return (
    <div className={styles.loader}>
      <div style={{ backgroundColor: props.backgroundColor }}></div>
      <div style={{ backgroundColor: props.backgroundColor }}></div>
      <div style={{ backgroundColor: props.backgroundColor }}></div>
    </div>
  );
};

export default Loader;
