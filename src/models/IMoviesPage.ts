import {IMovie} from "@/models/IMovie";

export interface IMoviesPage {
    movies: IMovie[];
    currentPage: number;
    totalPages: number;
}