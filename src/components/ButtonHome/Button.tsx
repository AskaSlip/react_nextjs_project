"use client"
import React from 'react';
import {useRouter} from "next/navigation";
import styles from './Button.module.css'
import {styled} from "@mui/material/styles";

const Button = () => {

    const router = useRouter()
    return (
        <div>
            <button className={styles.btn} onClick={() => {
                router.push('/movies')
            }}>
                <span className={styles.btnText}>See all</span>
            </button>
        </div>
    );
};

export default Button;