"use client"
import React, {FC, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "@/models/IForm";
import {searchMovie} from "@/services/api.services";
import {IMovie} from "@/models/IMovie";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import {useRouter, useSearchParams} from "next/navigation";
interface IProps {
    page: number
}

const Search: FC<IProps> = ({page=1}) => {

    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('search')
    console.log(searchQuery);

    useEffect(() => {
        const xxx = async () => {
            try {
                const movies = await searchMovie(searchQuery || '', page);
                setSearchedMovies(movies);
            } catch (error) {
                console.error("Error searching movies:", error);
            }
        }

        xxx()
    }, []);

    let {formState: {isValid},register, handleSubmit} = useForm<IForm>({
        mode: "all"
    })
    const [searchedMovies, setSearchedMovies] = useState<IMovie[]>([]);

    const router = useRouter();

    const handleSearch = (inputValue:string) => {
        router.push(`?search=${encodeURIComponent(inputValue)}`);
    };

    const searchCreator = async (data: IForm) => {
        const searchQuery = data.search;
        console.log(searchQuery);
        handleSearch(searchQuery)

        try {
            const movies = await searchMovie(searchQuery, page);
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