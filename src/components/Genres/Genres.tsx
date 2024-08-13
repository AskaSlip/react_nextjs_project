"use server"
import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import {getGenres} from "@/services/api.services";
import {GetServerSideProps} from "next";

interface IProps {
    genres: IGenre[]
}


// Functional component to render genres list
const Genres: FC<IProps> = ({ genres }) => {
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

export default Genres;