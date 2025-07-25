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
            localStorage.setItem('cart', JSON.stringify(state.items)  );
        },
        clearCart : (state) =>{
            state.items.length = 0; //makes items[] as empty again
        },
        updateQty : (state,action) =>{
            const product = state.items.find((item)=>item.id == action.payload.itemId);
            if(product){
                product.quantity += action.payload.delta;
                localStorage.setItem('cart', JSON.stringify(state.items)  );
            }
        }
    }
});

export const {addItem, removeItem, clearCart, updateQty} = cartSlice.actions;
export default cartSlice.reducer;

