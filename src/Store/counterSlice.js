import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:0,
}

export const counterslice = createSlice({
    name:'counter',
    initialState,
    reducers:{
       increment:(state,action)=>{
        state.value +=5
       },
       decrement:(state,action)=>{
         state.value -=5
       },
       incrementByAmount:(state,action)=>{
        state.value += action.payload
       },
    },
})
export const {increment,decrement,incrementByAmount} = counterslice.actions;
export default counterslice.reducer