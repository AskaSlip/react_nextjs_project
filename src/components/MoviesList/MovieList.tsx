import React from 'react';
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import {getMovies} from "@/services/api.services";
import Link from "next/link";


const MovieList = async () => {

    // const [searchParams] = useSearchParams();
    // const page = parseInt(searchParams.get('page') || '1', 10);
    //
    // const [movies, setMovies] = useState<IMovie[]>([]);
    //
    // useEffect(() => {
    //     const fetchMovies = async () => {
    //
    //         try {
    //             const allMovies = await getMovies(page);
    //             setMovies(allMovies);
    //         } catch (error) {
    //             console.error('Failed to fetch movies:', error);
    //         }
    //     };
    //
    //     fetchMovies();
    // }, [page]);

    let allMovies = await getMovies()

    return (
        <div>
            <div>
                {allMovies.map(movie => (

                        <div key={movie.id}>
                            <MoviesListCard movie={movie}/>
                            <hr/>
                        </div>

                ))}
            </div>
        </div>
    );
};
export default MovieList;