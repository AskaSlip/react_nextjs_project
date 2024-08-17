import React from 'react';
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import {getMovies} from "@/services/api.services";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import styles from './MovieList.module.css'

const MovieList = async () => {


    let allMovies = await getMovies(1)

    return (
        <div>
            <div className={styles.wrap}>
                {allMovies.map(movie => (

                        <div key={movie.id}>
                            <MoviesListCard movie={movie}/>
                        </div>

                ))}
            </div>
            <PaginationComponent page={1}/>
        </div>
    );
};
export default MovieList;