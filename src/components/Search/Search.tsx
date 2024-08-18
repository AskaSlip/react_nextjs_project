"use client"
import React, {FC, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "@/models/IForm";
import {searchMovie} from "@/services/api.services";
import {IMovie} from "@/models/IMovie";
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import {useRouter, useSearchParams} from "next/navigation";
import styles from '../MoviesList/MovieList.module.css'
import searchStyles from './Search.module.css'
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

interface IProps {
    page: number
}

const Search: FC<IProps> = ({page=1}) => {

    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('search')
    console.log(searchQuery);

    const [totalPages, setTotalPages] = useState<number>()

    useEffect(() => {
        const pageSearching = async () => {
            try {
                const {movies, totalPages} = await searchMovie(searchQuery || '', page);
                setSearchedMovies(movies);
                setTotalPages(totalPages)
                console.log(totalPages);

            } catch (error) {
                console.error("Error searching movies:", error);
            }
        }

        pageSearching()
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
        handleSearch(searchQuery)

        try {
            const {movies} = await searchMovie(searchQuery, page);
            setSearchedMovies(movies);
        } catch (error) {
            console.error("Error searching movies:", error);
        }
    };


    return (
        <div className={searchStyles.wrap}>
            <form className={searchStyles.form} onSubmit={handleSubmit(searchCreator)}>
                <input className={searchStyles.input}
                    type="text"
                    placeholder={'search movie...'}
                    {...register('search', { required: true })}
                />
                <button className={searchStyles.btn} disabled={!isValid}><img src="/magnifying-glass.png" alt="search"/></button>
            </form>

            <div className={styles.wrap}>
                {searchedMovies.map(movie => (
                    <MoviesListCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <PaginationComponent hide={!searchedMovies.length} page={page} totalPages={totalPages || null}/>
        </div>
    );
};
export default Search;