import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import PosterPreview from "@/components/PosterPreview/PosterPreview";
import StarsRating from "@/components/StarsRating/StarsRating";
import Link from "next/link";
import styles from './MovieListCard.module.css'

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({ movie }) => {
    return (
        <div>
                <Link className={styles.wrap} href={
                    {pathname: '/movies/' + movie.id}
                }
                >
                <PosterPreview img={movie.poster_path} size={200}/>
                    <span>{movie.title}</span>
                <StarsRating rate={movie.vote_average}/>
                </Link>
        </div>
    );
};

export default MoviesListCard;