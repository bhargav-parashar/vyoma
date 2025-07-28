import {createSlice} from "@reduxjs/toolkit";

const getTheme = ()=>{
    const theme = localStorage.getItem('theme');
    if(theme)
        return JSON.parse(theme);
    else
        return 'light';
}

const themeSlice = createSlice({
    name: 'theme',
    initialState : {
        items : getTheme()
    },
    reducers: {
       
        updateTheme : (state,action) =>{
            const newTheme =  action.payload;
           
        }
    }
});

export const {updateTheme} = cartSlice.actions;
export default themeSlice.reducer;

