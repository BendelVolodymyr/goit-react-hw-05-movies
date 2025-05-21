import { DNA } from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass={styles.dnaWrapper}
    />
  );
};

export default Loader;
