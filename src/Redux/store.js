import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../feature/cart/cartSlice';
import modleReducer from '../feature/Modal/modleSlice'; 

export const store = configureStore({
    // in this Reducer all root reducer cover which is called using useSelector hooks
reducer:{
    cart:cartReducer,
    modal:modleReducer,
}

});