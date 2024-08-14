import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import {getGenres} from "@/services/api.services";


const Genres = async () => {

let allGenres:IGenre[] = await getGenres()

    return (
        <div>
            <ul>
                {allGenres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default Genres;