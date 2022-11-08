import styles from '../styles/Home.module.css';

const ErrorPage = () => {
  const handleClick = () => {
    throw new Error('testing the error boudnary');
  };
  return (
    <div>
      <button onClick={handleClick} className={styles.notfoundBtn}>
        Click me
      </button>
    </div>
  );
};
export default ErrorPage;
