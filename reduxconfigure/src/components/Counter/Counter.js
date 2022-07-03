import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Feature/Counter/CounterSlice';
import styles from './Counter.module.css'

const Counter = () => {

    const count = useSelector(state => state.counter.value);

    const dispatch = useDispatch();

  return (
    <>
    
    <div className={styles.container}>
        <button onClick={()=> dispatch(increment())} className={styles.btn}>Increment</button>
        <span className={styles.counter}>{count}</span>
        <button onClick={()=> dispatch(decrement())} className={styles.btn}>Decrement</button>
    </div>
    
    
    </>
  )
}

export default Counter