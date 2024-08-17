import React, {FC} from 'react';
import {ITrailer} from "@/models/ITrailer";
import {getMovieVideos, getTrailer} from "@/services/api.services";

interface IProps {
    id: number
}

const Trailer: FC<IProps> = async ({id}) => {

    const getVideos = await getMovieVideos(id);
    const movieTrailerUrl = getVideos.length > 0 ? getVideos[1] : null;

    if (!movieTrailerUrl) {
        return (
            <div>
                <p>No trailer available for this movie.</p>
            </div>
        );
    }

    const trailerUrl = getTrailer(movieTrailerUrl.key);

    return (
        <div>
             <iframe width="420" height="315"
                     src={trailerUrl}> (//test)
                frameBorder=&quot;0&quot;
                allow=&quot;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                picture-in-picture&quot;
                allowFullScreen
                title=&quot;Movie Trailer&quot;

            </iframe>
            <span></span>
        </div>
    );
};

export default Trailer;