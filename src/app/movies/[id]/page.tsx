"use client"

import React, {useEffect, useState} from 'react';
import MovieInfo from "@/components/MovieInfo/MovieInfo";
import {getMovieById} from "@/services/api.services";
import Link from "next/link";
import styles from './page.module.css'
import {useAppSelector} from "@/redux/store/store";
import {IMovieInfo} from "@/models/IMovieInfo";


const MoviePage = ({params:{id}}:{params:{id: number}}) => {

    const [getMovie, setGetMovie] = useState<IMovieInfo>()


    useEffect(() => {
        getMovieById(id).then((movie) => {
            setGetMovie(movie)
        })
    }, []);

    let {theme} = useAppSelector(state => state.ThemeSliceState )


    return (
        <div className={styles.wrap}>

                <Link href={'/movies'}>
                    <button className={`${styles.btn} ${theme === 'light' ? 'light-box' : 'dark-box'}`}>back to movies</button>
                </Link>

            <div className={styles.wrapCard}>
                <MovieInfo movie={getMovie}/>
            </div>
        </div>
    );
};

export default MoviePage;