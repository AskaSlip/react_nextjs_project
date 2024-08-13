import {IGenre} from "@/models/IGenre";

export interface IMovie {
    poster_path: string,
    id: number,
    title: string,
    vote_average: number,
    overview: string,
    genres: IGenre[]

}