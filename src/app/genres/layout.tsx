import {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Genres"
};

type Props = {children: React.ReactNode}

const GenresLayout= ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
);
};

export default GenresLayout;
