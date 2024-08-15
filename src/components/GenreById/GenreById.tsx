
import React, {FC, useEffect, useState} from 'react';
import {genresFilter, getMovies} from "@/services/api.services";
import {IMovie} from "@/models/IMovie";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";

interface IProps {
    id: number
}

const GenreById:FC<IProps> = async ({id}) => {

    const filteredMoviesByGenre = await genresFilter(id)


    return (
        <div>
            {filteredMoviesByGenre.map(movie => (
                <MoviesListCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default GenreById;