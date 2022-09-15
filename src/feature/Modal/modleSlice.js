import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isOpen:false,

}

const modleSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        openModal:(state,action)=>{
            state.isOpen=true;

        },
        closeModel:(state,action)=>{
            state.isOpen=false;
        }
    }
})

export const {closeModel,openModal} =modleSlice.actions
export default modleSlice.reducer