import styles from '../styles/Home.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">Hook</a>
      <a href="/reducercounter">Reducer</a>
      <a href="/404">404</a>
      <a href="/error">Error Boundary</a>
    </nav>
  );
};

export default Navigation;
