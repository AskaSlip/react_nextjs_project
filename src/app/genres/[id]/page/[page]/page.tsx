import React from 'react';
import GenreById from "@/components/GenreById/GenreById";


const GenresMoviesByPagePage = ({params:{id, page}}:{params:{id: string, page: string}}) => {



    return (
        <div>
            <GenreById id={+id} page={+page}/>
        </div>
    );
};

export default GenresMoviesByPagePage;