import {createSlice} from "@reduxjs/toolkit";

const getWishlist = ()=>{
    const wishlistItems = localStorage.getItem('wishlist');
    if(wishlistItems)
        return JSON.parse(wishlistItems);
    else
        return [];
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState : {
        items : getWishlist()
    },
    reducers: {
        addItemToWishlist : (state, action) => {
            //mutating the state here 
            
            state.items.push(action.payload);
            localStorage.setItem('wishlist', JSON.stringify(state.items)  );
            
        },
        removeItemFromWishlist : (state,action) =>{
            const id = action.payload;
            state.items =  state.items.filter((item)=>item.id != id);
            localStorage.setItem('wishlist', JSON.stringify(state.items)  );
        },
        clearWishlist : (state) =>{
            state.items.length = 0; //makes items[] as empty again
        },
        updateWishlistQty : (state,action) =>{
            const product = state.items.find((item)=>item.id == action.payload.itemId);
            if(product){
                product.quantity += action.payload.delta;
                localStorage.setItem('wishlist', JSON.stringify(state.items)  );
            }
        }
    }
});

export const {addItemToWishlist, removeItemFromWishlist, clearWishlist, updateWishlistQty} = wishlistSlice.actions;
export default wishlistSlice.reducer;

