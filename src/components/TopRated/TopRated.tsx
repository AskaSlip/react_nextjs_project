import React from 'react';
import {getTopRated} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import styles from './TopRated.module.css'

const TopRated = async () => {

    const topRatedMovies = await getTopRated()

    return (
        <div className={styles.wrap}>
            {topRatedMovies.slice(0, 3).map(movie => (
                    <MoviesListCard key={movie.id} movie={movie}/>

            ))}
        </div>
    );
};

export default TopRated;