import {createSlice} from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: 'modal',
    initialState : {
        hoverTab : -1,
        isModalOpen : false,
        isCheckoutModalOpen : false
    },
    reducers: {
        setHoveredTab: (state,action) =>{
            state.hoverTab = action.payload;
        },
        setIsModalOpen : (state,action) =>{
            state.isModalOpen = action.payload;
        },
        setIsCheckoutModalOpen :(state,action) =>{
            state.isCheckoutModalOpen = action.payload;
        },
        handleMouseEnter: (state,action) =>{
            const tab = action.payload;
            state.isModalOpen = true;
            state.hoverTab = tab;
        },
        handleMouseLeave: (state) =>{
            state.isModalOpen = false;
            state.hoverTab = -1;
        }
    }
});

export const {setHoveredTab,setIsModalOpen,setIsCheckoutModalOpen, handleMouseEnter,handleMouseLeave} = modalSlice.actions;
export default modalSlice.reducer;

