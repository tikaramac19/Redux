import React from 'react'
import styles from './Counter.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, increase} from '../store/Slice/CounterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value) 
    const dispatch = useDispatch()

    const incrementHandle = (e) =>{
        e.preventDefault()
        dispatch(increment())
    }
    const decrementHandle = (e) =>{
        e.preventDefault()

        dispatch(decrement())
    }
    const increaseHandle = (e) =>{
        e.preventDefault()

        dispatch(increase({payload : 50}))
    }
  return (
    <>
    
    <div className={styles.container}>
        <h1>Counter</h1>
        <h3 className={styles.title}>{count}</h3>

        <form > 
           
           <button onClick={incrementHandle}>Increment</button>
           <button onClick={decrementHandle}>Decrement</button>
           <button onClick={increaseHandle}>Increase By 50</button>

        </form>

    </div>
    
    
    </>
  )
}

export default Counter