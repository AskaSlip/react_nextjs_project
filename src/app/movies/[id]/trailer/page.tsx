"use client"
import React from 'react';
import Trailer from "@/components/Trailer/Trailer";
import Link from "next/link";
import styles from './page.module.css'
import {useAppSelector} from "@/redux/store/store";

const TrailerPage =({params:{id}}:{params:{id: number}}) => {

    let {theme} = useAppSelector(state => state.ThemeSliceState )


    return (
        <div className={styles.wrap}>
            <Trailer id={id}/>
            <Link href={`/movies/${id}`}>
                    <button className={`${styles.btn} ${theme === 'light' ? 'light-box' : 'dark-box'}`}>Back to Movie</button>
            </Link>
        </div>
    );
};

export default TrailerPage;