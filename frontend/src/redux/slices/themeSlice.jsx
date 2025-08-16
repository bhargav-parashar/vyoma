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
        currTheme : getTheme()
    },
    reducers: {
       
        updateTheme : (state,action) =>{
            const newTheme =  action.payload;
            state.currTheme = newTheme;
            localStorage.setItem('theme', JSON.stringify(newTheme) );
        }
    }
});

export const {updateTheme} = themeSlice.actions;
export default themeSlice.reducer;

