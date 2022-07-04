import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0, showCounter : true}
// creating an state slice
export const counterSlice = createSlice({
    name : 'counter',
    initialState: initialState,
    reducers: {
        increment : (state) => {
            state.value += 1
        },
        decrement : (state) =>{
            state.value -= 1
        },
        increase(state, actions){
            state.value += actions.amount
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})

export const {increment, decrement, increase, toggleCounter} = counterSlice.actions;

export default counterSlice.reducer;

// Creating a slice requires a string name to identify the slice, an initial state value
// and one or more reduxer functions to define how the state can be updated.

// once a slice is created, we can export the generated redux action creators and the 
// reducer function for the while slice.