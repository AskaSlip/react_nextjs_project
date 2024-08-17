import React from 'react';
import {getUpcoming} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import styles from './Upcoming.module.css'

const Upcoming = async () => {

    const upcomingMovies = await getUpcoming()

    return (
        <div className={styles.wrap}>
            {upcomingMovies.slice(0,3).map(movie => (

                    <MoviesListCard key={movie.id} movie={movie}/>

            ))}
        </div>
    );
};

export default Upcoming;