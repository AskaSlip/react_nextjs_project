import React from 'react';
import {getTopRated} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";

const TopRated = async () => {

    const topRatedMovies = await getTopRated()

    return (
        <div>
            {topRatedMovies.slice(0, 3).map(movie => (
                <div key={movie.id}>
                    <MoviesListCard movie={movie}/>
                </div>
            ))}
        </div>
    );
};

export default TopRated;