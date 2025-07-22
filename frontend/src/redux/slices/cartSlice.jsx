import {createSlice} from "@reduxjs/toolkit";

const getCart = ()=>{
    const cartItems = localStorage.getItem('cart');
    if(cartItems)
        return JSON.parse(cartItems);
    else
        return [];
}

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items : getCart()
    },
    reducers: {
        addItem : (state, action) => {
            //mutating the state here 
            
            state.items.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items)  );
            
        },
        removeItem : (state,action) =>{
            const id = action.payload;
            state.items =  state.items.filter((item)=>item.id != id);
        },
        clearCart : (state) =>{
            state.items.length = 0; //makes items[] as empty again
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

