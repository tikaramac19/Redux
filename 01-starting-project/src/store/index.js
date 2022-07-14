import { configureStore } from "@reduxjs/toolkit";

import uiSlice from './ui-slice'

export default configureStore({
    reducer : {
        ui : uiSlice
    }
})