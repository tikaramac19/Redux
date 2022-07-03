import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/Feature/Counter/CounterSlice'

// create redux store
export default configureStore({
    reducer : {
        counter: counterReducer // add slice reducers to the store
    }
})

// This creates a redux store, and also automatically fonfigure the Redux 
// DevTools extension so that you can inspect the store while developing.

