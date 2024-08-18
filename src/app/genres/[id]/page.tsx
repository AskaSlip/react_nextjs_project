import React from 'react';
import GenreById from "@/components/GenreById/GenreById";


const MoviesByGenrePage = ({params:{id}}:{params:{id: number}}) => {


    return (
        <div>
            <GenreById id={id}/>
        </div>
    );
};

export default MoviesByGenrePage;