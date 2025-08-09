import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import wishlistReducer from "../slices/wishlistSlice";
import modalReducer from "../slices/modalSlice";

const appStore = configureStore({
    reducer :{
        cart : cartReducer,
        wishlist : wishlistReducer,
        modal : modalReducer
    }
}); 

export default appStore;