import {IGenre} from "@/models/IGenre";

export interface IMovieInfo{
    genres: IGenre[],
    original_title: string,
    vote_average: number,
    poster_path: string
    overview: string
}