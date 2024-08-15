import React from 'react';
import GenreById from "@/components/GenreById/GenreById";

const MoviesByGenrePage = ({params:{id}}:{params:{id: number}}) => {

    console.log(id);

    return (
        <div>
            movies by genre {id}
            <GenreById id={id}/>
        </div>
    );
};

export default MoviesByGenrePage;