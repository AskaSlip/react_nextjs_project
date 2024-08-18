"use client"
import React, {useEffect, useState} from 'react';
import {getUpcoming} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import styles from './Upcoming.module.css'
import {IMovie} from "@/models/IMovie";

const Upcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState<IMovie[]>([])

    useEffect(() => {
    getUpcoming().then((movies) => {
        setUpcomingMovies(movies)
    })
    }, []);

    return (
        <div className={styles.wrap}>
            {upcomingMovies.slice(0,3).map(movie => (

                    <MoviesListCard key={movie.id} movie={movie}/>

            ))}
        </div>
    );
};

export default Upcoming;