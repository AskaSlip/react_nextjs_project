'use client'
import React from 'react'
import {Provider} from 'react-redux'
import {store, useAppSelector} from "@/redux/store/store";
import {createTheme, PaletteMode, ThemeProvider} from "@mui/material";

export default function StoreProvider({ children}: {
    children: React.ReactNode
})
{
    // let {theme: mode} = useAppSelector(state => state.ThemeSliceState )
    let mode = useAppSelector(state => state.ThemeSliceState.theme) as PaletteMode;


    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode
                },
            }),
        [mode],
    );
    return (
            <ThemeProvider theme={theme}>
                <Provider store={store}>{children}</Provider>
            </ThemeProvider>
    );
}
