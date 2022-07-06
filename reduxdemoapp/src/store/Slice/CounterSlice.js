import {createSlice} from '@reduxjs/toolkit'

const initialCounterState = {value: 0}

const counterSlice = createSlice({
    name: 'counter',
    initialState : initialCounterState,
    reducers: {
        increment : (state) =>{
            state.value = state.value + 1
        },
        decrement : (state) =>{
            state.value = state.value - 1
        },
        increase : (state) =>{
            state.value = state.value + 50
        }
    }
    
});

export const {increment, decrement, increase} = counterSlice.actions;

export default counterSlice.reducer;