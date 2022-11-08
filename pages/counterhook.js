import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useCounter from '../hooks/useCounter.js';
import { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { GrRevert } from 'react-icons/gr';

const CounterHook = () => {
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

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Custom hook</h1>

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
            <AiOutlinePlus size="20px" />
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
        {/* </div> */}
      </main>
    </div>
  );
};
export default CounterHook;
