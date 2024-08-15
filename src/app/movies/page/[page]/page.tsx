import React from 'react';
import {getMovies} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

const PaginatedPage = async ({params:{page}}:{params:{page: number}}) => {

    console.log(page);

    const allMovies = await getMovies(page)

    return (
        <div>
            <div>page number {page}
                {allMovies.map(movie => (
                    <MoviesListCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <PaginationComponent page={page}/>
        </div>
    );
};

export default PaginatedPage;