import {IMovie} from "@/models/IMovie";

export interface IMovieResponse{

    results: IMovie[];
    page: number;
    total_pages: number
}