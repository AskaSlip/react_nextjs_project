import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreview from "@/components/PosterPreview/PosterPreview";

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({ movie }) => {
    return (
        <div>
            {/*<PosterPreview posterPath={movie.poster_path} />*/}
            poster
            <br />
            {movie.title}
            <br />
            {movie.vote_average}
        </div>
    );
};

export default MoviesListCard;