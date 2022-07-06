import {configureStore} from '@reduxjs/toolkit'
import authReducer from './Slice/StateSlice'
import counterReducer from './Slice/CounterSlice'

export default configureStore({
    reducer : {
        auth: authReducer,
        counter : counterReducer
    }
})