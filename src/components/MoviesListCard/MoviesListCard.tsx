import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreview from "@/components/PosterPreview/PosterPreview";
import StarsRating from "@/components/StarsRating/StarsRating";
import Link from "next/link";

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({ movie }) => {
    return (
        <div>
            <div>
                <Link href={
                    {pathname: '/movies/' + movie.id}
                }
                >
                <PosterPreview img={movie.poster_path}/>
                <br/>
                {movie.title}
                <br/>
                <StarsRating rate={movie.vote_average}/>
                </Link>
            </div>
        </div>
    );
};

export default MoviesListCard;