import {IMovie} from "@/models/IMovie";

export interface IMovieResponse{

    results: IMovie[];
    total_pages: number;
}