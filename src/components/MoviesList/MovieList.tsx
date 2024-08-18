"use client"
import React, {FC, useEffect, useState} from 'react';
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import {getMovies} from "@/services/api.services";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import styles from './MovieList.module.css'
import {IMovie} from "@/models/IMovie";

interface IProps {
    noPagination?: boolean
}

const MovieList:FC <IProps> = ({noPagination}) => {

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
            {!noPagination && <PaginationComponent page={1} totalPages={500}/>}
        </div>
    );
};
export default MovieList;