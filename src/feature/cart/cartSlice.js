import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../Components/cartItems";



const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  // This is the root reducer in which all reducer cover
  reducers: {
    clearCart: (state) => {
      console.log("hello", state)
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      console.log(action)
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      // console.log(payload)
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      // console.log(payload)
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        console.log("item items itessss",item)
        amount += item.amount;
        total += item.amount * item.price;
        console.log("amount", amount , "total",total)
      });
      state.amount = amount;
      state.total = total;
    },
  
  },
});

// this function used in aplication like in context api ma value ={clearCart,removeItem,increase,decrease,calculateTotals} pass for use 
export const { clearCart,removeItem,increase,decrease,calculateTotals } = cartSlice.actions;

// This is  used in store  cartReducer name
export default cartSlice.reducer;
