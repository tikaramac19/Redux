import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, increase, toggle } from '../Feature/Counter/CounterSlice';
import styles from './Counter.module.css'

const Counter = () => {

 const count = useSelector((state) => state.counter.value)
  const showCounter = useSelector((state) => state.showCounter)
 const dispatch = useDispatch()

  return (
    <>
    
    <div className={styles.container}>
        <button onClick={()=> dispatch(increment())} className={styles.btn}>Increment</button>
        <span className={styles.counter}>{count}</span>
        <button onClick={()=> dispatch(decrement())} className={styles.btn}>Decrement</button>
        <button onClick={()=> dispatch(increase({payload: 10}))}>IncreseBy 25</button>
        
        <button onClick={()=>dispatch(toggle())}>Clear Count</button>
    </div>
    
    
    </>
  )
}

export default Counter