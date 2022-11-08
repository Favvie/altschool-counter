import Head from 'next/head';
import React, { useRef, useReducer } from 'react';
import styles from '../styles/Home.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { GrRevert } from 'react-icons/gr';
import Navigation from '../components/Navigation';

const ReducerCounter = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return { count: 0 };
      case 'setvalue':
        return { ...state, count: Number(action.payload) };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const inputEl = useRef();

  function increment() {
    dispatch({ type: 'increment' });
  }
  function decrement() {
    dispatch({ type: 'decrement' });
  }
  function reset() {
    dispatch({ type: 'reset' });
  }
  function setValue(e) {
    e.preventDefault();
    let inputFieldData = inputEl.current.value;
    dispatch({ type: 'setvalue', payload: inputFieldData });
    inputEl.current.value = '';
  }

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <Head>
          <title>Counter using useReducer hook</title>
          <meta
            name="description"
            content="A counter page that use useReducer hook is a new way to do a counter."
          />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Reducer counter</h1>
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
            <p className={styles.countvalue}>{state.count}</p>
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
            <button onClick={setValue} className={styles.buttonValue}>
              set Value
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default ReducerCounter;
