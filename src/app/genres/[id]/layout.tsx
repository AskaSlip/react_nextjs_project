import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Movies by genre"
};

type Props = {children: React.ReactNode}

const MoviesByGenreLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
);
};

export default MoviesByGenreLayout;
