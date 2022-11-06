import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useCounter from '../hooks/useCounter.js';
import { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { GrRevert } from 'react-icons/gr';

export default function Home() {
  const [increment, decrement, count, reset, setValue] = useCounter();

  const inputEl = useRef();
  const addValue = (e) => {
    e.preventDefault();
    setValue(Number(inputEl.current.value));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Custom counter hook</title>
        <meta
          name="description"
          content="A counter page that use a custom useCounter hook to do a counter."
        />
      </Head>

      <h1 className={styles.title}>Welcome to the custom counter hook</h1>
      <main className={styles.main}>
        <div>
          <button
            onClick={reset}
            className={styles.reset}
            aria-label="Reset Value"
          >
            <GrRevert /> Reset Value
          </button>
          <section className={styles.section}>
            <button
              onClick={increment}
              className={styles.buttonIncrease}
              aria-label="increase Value"
            >
              <AiOutlinePlus size={30} />
            </button>
            <p className={styles.countvalue}>{count}</p>
            <button
              onClick={decrement}
              className={styles.buttonDecrease}
              aria-label="decrease Value"
            >
              <AiOutlineMinus size={30} />
            </button>
          </section>
          <form className={styles.form}>
            <input
              type="text"
              ref={inputEl}
              className={styles.input}
              aria-label="input value"
            />
            <button onClick={addValue} className={styles.buttonValue}>
              set Value
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
