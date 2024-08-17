import React, {FC} from 'react';
import {genresFilter} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import styles from '../MoviesList/MovieList.module.css'

interface IProps {
    id: number,
    page?: number
}

const GenreById:FC<IProps> = async ({id,page= 1}) => {

    console.log(id,page);
    const filteredMoviesByGenre = await genresFilter(id, page)


    return (
        <div>
            <div className={styles.wrap}>
                {filteredMoviesByGenre.map(movie => (
                <MoviesListCard key={movie.id} movie={movie}/>
            ))}
            </div>
            <PaginationComponent page={page}/>
        </div>
    );
};

export default GenreById;