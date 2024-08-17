import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import {getGenres} from "@/services/api.services";
import Link from "next/link";
import MovieList from "@/components/MoviesList/MovieList";
import styles from './Genres.module.css'

const Genres = async () => {

let allGenres:IGenre[] = await getGenres()

    return (
        <div className={styles.wrap}>
            <div className={styles.genreBlock}>{allGenres.map(genre => (
                <div className={styles.links} key={genre.id}>
                    <Link className={styles.link} href={'/genres/' + genre.id}>{genre.name}
                    </Link>
                </div>
            ))}</div>

            <MovieList/>
        </div>
    );
};


export default Genres;