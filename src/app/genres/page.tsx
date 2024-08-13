
import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import {GetServerSideProps} from "next";
import {getGenres} from "@/services/api.services";

interface IProps {
    genres: IGenre[]
}



const GenresPage: FC<IProps> = ({ genres }) => {
    return (
        <div>
            <ul>
                {genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const genres = await getGenres();

    return {
        props: {
            genres,
        }
    };
};

export default GenresPage;