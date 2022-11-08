import styles from '../styles/Home.module.css';

export default function Custom404() {
  return (
    <main className={styles.notfoundMain}>
      <h1 className={styles.notfoundTitle}>Page Not Found</h1>
      <a href="/" className={styles.notfoundBtn}>
        Return to home page
      </a>
    </main>
  );
}
