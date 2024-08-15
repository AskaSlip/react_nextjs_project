import React from 'react';
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import {getMovies} from "@/services/api.services";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";


const MovieList = async () => {


    let allMovies = await getMovies(1)

    return (
        <div>
            <div>
                {allMovies.map(movie => (

                        <div key={movie.id}>
                            <MoviesListCard movie={movie}/>
                            <hr/>
                        </div>

                ))}
            </div>
            <PaginationComponent page={1}/>
        </div>
    );
};
export default MovieList;