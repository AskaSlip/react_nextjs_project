"use client"

import React, {FC, useEffect, useState} from 'react';
import {IGenre} from "@/models/IGenre";
import {getGenres} from "@/services/api.services";
import Link from "next/link";
import MovieList from "@/components/MoviesList/MovieList";
import styles from './Genres.module.css'
import {useAppSelector} from "@/redux/store/store";

const Genres =  () => {

    let {theme} = useAppSelector(state => state.ThemeSliceState )

    const [allGenres, setAllGenres] = useState<IGenre[]>([])

    useEffect(() => {
    getGenres().then((genre) => {
        setAllGenres(genre)
    })
    }, []);

    return (
        <div className={styles.wrap}>
            <div className={styles.genreBlock}>{allGenres.map(genre => (
                <div className={`${styles.links} ${theme === 'light' ? 'light-box' : 'dark-box'}`} key={genre.id}>
                    <Link className={styles.link} href={'/genres/' + genre.id}>{genre.name}
                    </Link>
                </div>
            ))}</div>

            <MovieList/>
        </div>
    );
};


export default Genres;