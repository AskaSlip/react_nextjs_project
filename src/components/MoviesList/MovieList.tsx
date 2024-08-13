import React, {FC} from 'react';
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import {IMovie} from "@/models/IMovie";
import {getMovies} from "@/services/api.services";



const MovieList = async () => {

    let allMovies = await getMovies()

    return (
        <div>
            <div>
                {allMovies.map(movie => (
                    <div key={movie.id}>
                        <MoviesListCard movie={movie} />
                        <hr />
                    </div>
                ))}
            </div>
            {/*<PaginationComponent currentPage={currentPage} totalPages={totalPages} />*/}
        </div>
    );
};
export default MovieList;