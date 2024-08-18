import {IMovie} from "@/models/IMovie";
import {IGenre} from "@/models/IGenre";
import {IMovieInfo} from "@/models/IMovieInfo";
import {ITrailer} from "@/models/ITrailer";

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY1ODUxNDRhOTIzYzE2Nzc2M2FkM2M3NzEyZDllMSIsIm5iZiI6MTcyMzUxMTA5Ni41NDYzNzEsInN1YiI6IjY2YmFhZWViMmZiODRkZjc4ZTkxMzc5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Re6iY3DVoorhVEwuiomrNKfqN6jUMhHsuVCTToJsPXE';

const options = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: 'application/json',
    }
};

export const getMovies = async (page: number): Promise<IMovie[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options);
    const data = await response.json();
    return data.results

};

export const getPoster = (img:string, size: number) => {
    return `https://image.tmdb.org/t/p/w${size}` + img
}

export const getGenres = async (): Promise<IGenre[]> => {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    const data = await response.json();
    return data.genres
}

export const getMovieById = async (id:number): Promise<IMovieInfo> => {
    const response = await fetch('https://api.themoviedb.org/3/movie/' + id + '?language=en-US', options)
    const data = await response.json()
    return data
}

export const getMovieVideos = async (id:number) : Promise<ITrailer[]>=> {
    const response = await fetch('https://api.themoviedb.org/3/movie/' + id +'/videos?language=en-US', options)
    const data =  await response.json()
    return data.results
}

export const getTrailer = (url:string) => {
    return 'https://www.youtube.com/embed/' + url
}

export const genresFilter = async (id: number, page: number): Promise<{ movies: IMovie[], totalPages: number }> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=` + id, options)
    const data = await response.json()
    return {movies: data.results, totalPages: data.total_pages}
}

export const searchMovie = async (query: string, page:number) : Promise<{movies: IMovie[], totalPages: number }>=> {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`, options)
    const data = await response.json()

    return {movies: data.results, totalPages: data.total_pages}
}

export const getTopRated = async () :Promise<IMovie[]>=> {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const data = await response.json()
    return data.results
}

export const getUpcoming = async (): Promise<IMovie[]> => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    const data = await response.json()
    return data.results
}