import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import {getGenres, getMovies} from "@/services/api.services";
import Link from "next/link";
import MovieList from "@/components/MoviesList/MovieList";

const Genres = async () => {

let allGenres:IGenre[] = await getGenres()

    return (
        <div>
            <ul>
                {allGenres.map(genre => (
                    <li key={genre.id}><Link href={'/genres/' + genre.id}>{genre.name}</Link></li>
                ))}
            </ul>
            <MovieList/>
        </div>
    );
};


export default Genres;