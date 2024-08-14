import React from 'react';
import {IMovie} from "@/models/IMovie";
import MovieInfo from "@/components/MovieInfo/MovieInfo";
import {getMovieById} from "@/services/api.services";

const MoviePage =async ({params:{id}}:{params:{id: number}}) => {

    console.log(id);
    let getMovie = await getMovieById(id)

    return (
        <div>
            movie details {id}
            <MovieInfo movie={getMovie}/>
        </div>
    );
};

export default MoviePage;