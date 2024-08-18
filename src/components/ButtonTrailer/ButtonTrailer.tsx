"use client"
import React from 'react';
import {useRouter} from "next/navigation";
import styles from './ButtonTrailer.module.css'

const ButtonTrailer = ({params:{id}}:{params:{id: number}}) => {

    const router = useRouter()

    return (
        <div className={styles.trailer}>
            <button className={styles.btn} onClick={() => {
                router.push(id + '/trailer')
            }}>
                Watch trailer
            </button>
        </div>
    );
};

export default ButtonTrailer;