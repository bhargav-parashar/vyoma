import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import wishlistReducer from "../slices/wishlistSlice";
import modalReducer from "../slices/modalSlice";
import themeReducer from "../slices/themeSlice";


const appStore = configureStore({
    reducer :{
        cart : cartReducer,
        wishlist : wishlistReducer,
        modal : modalReducer,
        theme : themeReducer
    }
}); 

export default appStore;