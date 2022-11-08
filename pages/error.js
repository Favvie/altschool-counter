import styles from '../styles/Home.module.css';
import { useState } from 'react';

const CrashableComponent = (props) => {
  return <span>{props.iDontExist.prop}</span>;
};

const ErrorPage = () => {
  const [error, setError] = useState(false);
  const handleClick = () => {
    setError(true);
  };
  return (
    <div>
      <button onClick={handleClick} className={styles.notfoundBtn}>
        Click me
      </button>
      {error && <CrashableComponent />}
    </div>
  );
};
export default ErrorPage;
