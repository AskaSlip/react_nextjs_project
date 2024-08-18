"use client"
import React from 'react';
import {useRouter} from "next/navigation";
import styles from './Button.module.css'
import {styled} from "@mui/material/styles";
import {useAppSelector} from "@/redux/store/store";

const Button = () => {

    let {theme} = useAppSelector(state => state.ThemeSliceState )


    const router = useRouter()
    return (
        <div>
            <button  className={`${styles.btn} ${theme === 'light' ? 'light-box' : 'dark-box'}`} onClick={() => {
                router.push('/movies')
            }}>
                <span>See all</span>
            </button>
        </div>
    );
};

export default Button;