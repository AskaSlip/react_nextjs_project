import {configureStore, createSlice} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

type ThemeType = {
    theme: string
}

let initState: ThemeType ={
    theme: "light"
}

let ThemeSlice = createSlice({
    name:'ThemeSlice',
    initialState: initState,

    reducers:{
        lightTheme: (state) => {
            state.theme = 'light'
        },
        darkTheme: (state) => {
            state.theme = 'dark'
        }
    }
});

export const {lightTheme, darkTheme}
    = ThemeSlice.actions;

export const store = configureStore({
    reducer:{
        ThemeSliceState: ThemeSlice.reducer
    }
});

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const useAppDispatch : () => typeof store.dispatch = useDispatch