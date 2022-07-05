import {configureStore} from '@reduxjs/toolkit'
import authReducer from './Slice/StateSlice'
export default configureStore({
    reducer : {
        auth: authReducer
    }
})