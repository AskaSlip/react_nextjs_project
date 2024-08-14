import React, {FC} from 'react';
import GenreBadge from "@/components/GenreBadge/GenreBadge";
import {IMovieInfo} from "@/models/IMovieInfo";
import PosterPreview from "@/components/PosterPreview/PosterPreview";

interface IProps {
    movie: IMovieInfo
}

const MovieInfo:FC<IProps> = ({movie}) => {

    let genresQuantity = movie.genres.length


    return (
        <div>
            <PosterPreview img={movie.poster_path}/>
            {movie.original_title}
            <hr/>
            {movie.vote_average}
            <hr/>
            <GenreBadge genresQuantity={genresQuantity}/>
            <hr/>
            {movie.genres.map((genre, index) => (<span key={index}>{genre.name}</span>))}

        </div>
    );
};

export default MovieInfo;