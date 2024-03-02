import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    authentication:false,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        isLogin:(state)=>{
          state.authentication=!state.authentication
        },
        isLogout:(state)=>{
          state.authentication=!state.authentication
        }
    }
})
export default authSlice.reducer;
export const {isLogin,isLogout} = authSlice.actions;