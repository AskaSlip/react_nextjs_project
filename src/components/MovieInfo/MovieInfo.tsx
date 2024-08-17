import React, {FC} from 'react';
import GenreBadge from "@/components/GenreBadge/GenreBadge";
import {IMovieInfo} from "@/models/IMovieInfo";
import PosterPreview from "@/components/PosterPreview/PosterPreview";
import StarsRating from "@/components/StarsRating/StarsRating";
import styles from './MovieInfo.module.css'

interface IProps {
    movie: IMovieInfo
}

const MovieInfo:FC<IProps> = ({movie}) => {

    let genresQuantity = movie.genres.length


    return (
        <div className={styles.wrap}>
            <div >
                <PosterPreview img={movie.poster_path} size={300}/>
            </div>

            <div className={styles.info}>
                <div>{movie.original_title}</div>
                <StarsRating rate={movie.vote_average}/>

                <GenreBadge genresQuantity={genresQuantity}/>
                {movie.genres.map((genre, index) => (<div key={index}>{genre.name}</div>))}
            </div>

            <div className={styles.overview}>{movie.overview}</div>


        </div>
    );
};

export default MovieInfo;