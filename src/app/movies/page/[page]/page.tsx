import React from 'react';
import {getMovies} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import styles from '../../../../components/MoviesList/MovieList.module.css'
import styleWrap from './page.module.css'

const PaginatedPage = async ({params:{page}}:{params:{page: number}}) => {



    const allMovies = await getMovies(page)

    return (
        <div className={styleWrap.wrap}>
            <div className={styles.wrap}>
                {allMovies.map(movie => (
                    <MoviesListCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <PaginationComponent page={page} totalPages={500}/>
        </div>
    );
};

export default PaginatedPage;