import React from 'react';
import {getUpcoming} from "@/services/api.services";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";

const Upcoming = async () => {

    const upcomingMovies = await getUpcoming()

    return (
        <div>
            {upcomingMovies.slice(0,3).map(movie => (
                <div key={movie.id}>
                    <MoviesListCard movie={movie}/>
                </div>
            ))}
        </div>
    );
};

export default Upcoming;