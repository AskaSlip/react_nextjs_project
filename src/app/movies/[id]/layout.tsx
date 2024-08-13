import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Movie"
};

type Props = {children: React.ReactNode}

const MovieLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
);
};

export default MovieLayout;
