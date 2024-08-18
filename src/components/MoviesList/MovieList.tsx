"use client"
import React, {useEffect, useState} from 'react';
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import {getMovies} from "@/services/api.services";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import styles from './MovieList.module.css'
import {IMovie} from "@/models/IMovie";

const MovieList = () => {

    const [allMovies, setAllMovies] = useState<IMovie[]>([])

    useEffect(() => {
    getMovies(1).then((movie) => {
        setAllMovies(movie)
    })
    }, []);

    return (
        <div className={styles.wrap}>
            <div className={styles.wrap}>
                {allMovies.map(movie => (

                        <div key={movie.id}>
                            <MoviesListCard movie={movie}/>
                        </div>

                ))}
            </div>
            <PaginationComponent page={1} totalPages={500}/>
        </div>
    );
};
export default MovieList;