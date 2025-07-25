import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import wishlistReducer from "../slices/wishlistSlice";

const appStore = configureStore({
    reducer :{
        cart : cartReducer,
        wishlist : wishlistReducer
    }
}); 

export default appStore;