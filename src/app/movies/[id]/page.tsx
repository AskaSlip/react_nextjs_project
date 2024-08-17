import React from 'react';
import MovieInfo from "@/components/MovieInfo/MovieInfo";
import {getMovieById} from "@/services/api.services";
import Link from "next/link";
import ButtonTrailer from "@/components/ButtonTrailer/ButtonTrailer";
import styles from './page.module.css'


const MoviePage =async ({params:{id}}:{params:{id: number}}) => {

    let getMovie = await getMovieById(id)

    return (
        <div className={styles.wrap}>

                <Link href={'/movies'}>
                    <button>back to movies</button>
                </Link>

            <div className={styles.wrapCard}>
                <MovieInfo movie={getMovie}/>
                <ButtonTrailer params={{id}}/>
            </div>
        </div>
    );
};

export default MoviePage;