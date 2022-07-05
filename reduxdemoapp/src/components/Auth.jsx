import React from 'react'
import styles  from './Auth.module.css'
import { login } from '../store/Slice/StateSlice'
import { useDispatch } from 'react-redux'

const Auth = () => {
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();

    dispatch(login());
  }

  return (
    <>
    
    <section className={styles.form_container}>
        <form onSubmit={submitHandle}>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name='email' placeholder='Enter email'/>
                <br />
            <label htmlFor="password">Password</label><br />
            <input type="password" name='password' placeholder='password' />
                <br />
            <button type='submit'>Login</button>
        </form>
    </section>
    
    </>
  )
}

export default Auth