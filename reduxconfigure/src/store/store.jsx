// creating redux store using createConfigure

import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '../components/Feature/Counter/CounterSlice'

export default configureStore({
    reducer: {
        counter : counterReducer
    }
});



// This creates a redux store, and also automatically fonfigure the Redux 
// DevTools extension so that you can inspect the store while developing.

