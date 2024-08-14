import {IMovieResponse} from "@/models/IMovieResponse";
import {IMovie} from "@/models/IMovie";
import {IGenre} from "@/models/IGenre";

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY1ODUxNDRhOTIzYzE2Nzc2M2FkM2M3NzEyZDllMSIsIm5iZiI6MTcyMzUxMTA5Ni41NDYzNzEsInN1YiI6IjY2YmFhZWViMmZiODRkZjc4ZTkxMzc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Re6iY3DVoorhVEwuiomrNKfqN6jUMhHsuVCTToJsPXE';

const options = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: 'application/json',
    }
};

export const getMovies = async (page: number = 1): Promise<IMovie[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options);
    const data = await response.json();
    return data.results
        // data.total_pages, data.page;
};

export const getPoster = (img:string) => {
    return 'https://image.tmdb.org/t/p/w200' + img
}

export const getGenres = async (): Promise<IGenre[]> => {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    const data = await response.json();
    console.log(data);
    return data.genres
}

export const getMovieById = async (id:number) => {
    const response = await fetch('https://api.themoviedb.org/3/movie/' + id + '?language=en-US', options)
    const data = await response.json()
    return data
}