import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useCounter from '../hooks/useCounter.js';
import { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { GrRevert } from 'react-icons/gr';
import CounterHook from './counterhook';
import Navigation from '../components/Navigation';

export default function Home() {
  const [increment, decrement, count, reset, setValue] = useCounter();

  const inputEl = useRef();
  const addValue = (e) => {
    e.preventDefault();
    setValue(Number(inputEl.current.value));
  };

  return (
    <>
      <Navigation />
      <CounterHook />
    </>
  );
}
