'use client'
import React from "react";
import {useAppSelector} from "@/redux/store/store";
import { Inter } from "next/font/google";
import {styled} from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });

const Root = ({children}) =>  {
    let {theme} = useAppSelector(state => state.ThemeSliceState )
    return (
        <body className={theme === 'light' ? 'light-theme' : 'dark-theme'} >
            {children}
        </body>
    )
}

export default Root