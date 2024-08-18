"use client"
import React, {FC} from 'react';
import GenreBadge from "@/components/GenreBadge/GenreBadge";
import {IMovieInfo} from "@/models/IMovieInfo";
import PosterPreview from "@/components/PosterPreview/PosterPreview";
import StarsRating from "@/components/StarsRating/StarsRating";
import styles from './MovieInfo.module.css'
import {useAppSelector} from "@/redux/store/store";
import Link from "next/link";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ButtonTrailer from "@/components/ButtonTrailer/ButtonTrailer";


interface IProps {
    movie: IMovieInfo | undefined
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MovieInfo:FC<IProps> = ({movie}) => {

    let {theme} = useAppSelector(state => state.ThemeSliceState )

    if (!movie) {
        return  <></>

    }

    let genresQuantity = movie.genres.length


    return (
        <div className={`${styles.wrap} ${theme === 'light' ? 'light-box' : 'dark-box'}`}>
            <div>
                <PosterPreview img={movie.poster_path} size={300}/>
            </div>

            <div className={styles.info}>
                <div className={styles.title}>{movie.original_title}</div>
                <StarsRating rate={movie.vote_average}/>

                <GenreBadge genresQuantity={genresQuantity}/>
                <div className={styles.linksWrap}>
                    {movie.genres.map((genre, index) => (
                        <Link className={styles.links} href={'/genres/' + genre.id} key={index}>{genre.name}</Link>))}
                </div>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.icons}>
                    <Checkbox {...label} color="secondary" icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
                    <Checkbox
                        {...label}
                        icon={<BookmarkBorderIcon/>}
                        checkedIcon={<BookmarkIcon/>}
                    />
                </div>

                <div className={styles.overview}>{movie.overview}</div>
            <ButtonTrailer params={movie}/>
            </div>



        </div>
    );
};

export default MovieInfo;