import React, {FC} from 'react';
import {genresFilter} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import styles from '../MoviesList/MovieList.module.css'
import styleGenre from './GenreById.module.css'

interface IProps {
    id: number,
    page?: number
}

const GenreById:FC<IProps> = async ({id,page= 1}) => {

    const {movies, totalPages} = await genresFilter(id, page)


    return (
        <div className={styleGenre.wrap}>
            <div className={styles.wrap}>
                {movies.map(movie => (
                <MoviesListCard key={movie.id} movie={movie}/>
            ))}
            </div>
            <PaginationComponent page={page} totalPages={totalPages || null}/>
        </div>
    );
};

export default GenreById;