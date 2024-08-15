import React from 'react';
import GenreById from "@/components/GenreById/GenreById";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

const GenresMoviesByPagePage = ({params:{id, page}}:{params:{id: string, page: string}}) => {

console.log('here')

    return (
        <div>
            <GenreById id={+id} page={+page}/>
            <PaginationComponent page={+page}/>
        </div>
    );
};

export default GenresMoviesByPagePage;