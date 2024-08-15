"use client"
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "@/models/IForm";
import {searchMovie} from "@/services/api.services";
import {IMovie} from "@/models/IMovie";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";

const Search = () => {

    let {formState: {isValid},register, handleSubmit} = useForm<IForm>({
        mode: "all"
    })

    const [searchedMovies, setSearchedMovies] = useState<IMovie[]>([]);


    const searchCreator = async (data: IForm) => {
        const searchQuery = data.search;
        console.log(searchQuery);

        try {
            const movies = await searchMovie(searchQuery);
            setSearchedMovies(movies);
        } catch (error) {
            console.error("Error searching movies:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(searchCreator)}>
                <input
                    type="text"
                    placeholder={'search movie...'}
                    {...register('search', { required: true })}
                />
                <button disabled={!isValid}>search icon</button>
            </form>
            <div>
                {searchedMovies.map(movie => (
                    <MoviesListCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};
export default Search;