"use client"
import React from 'react';
import MovieInfo from "@/components/MovieInfo/MovieInfo";
import {getMovieById} from "@/services/api.services";
import {useRouter} from "next/navigation";
import Link from "next/link";

const MoviePage =async ({params:{id}}:{params:{id: number}}) => {

    const router = useRouter()
    
    let getMovie = await getMovieById(id)

    return (
        <div>

                <Link href={'/movies'}>
                    <button>back to movies</button>
                </Link>

            <MovieInfo movie={getMovie}/>
            <button onClick={() => {
                router.push(id + '/trailer')
            }}>
                Watch trailer
            </button>
        </div>
    );
};

export default MoviePage;