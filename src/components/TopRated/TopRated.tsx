"use client"
import React, {useEffect, useState} from 'react';
import {getTopRated} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import styles from './TopRated.module.css'
import {IMovie} from "@/models/IMovie";

const TopRated = () => {
    const [topRatedMovies, setTopRatedMovies] = useState<IMovie[]>([])

    useEffect(() => {
    getTopRated().then(movies => setTopRatedMovies(movies))
    }, []);

    return (
        <div className={styles.wrap}>
            {topRatedMovies.slice(0, 3).map(movie => (
                    <MoviesListCard key={movie.id} movie={movie}/>

            ))}
        </div>
    );
};

export default TopRated;