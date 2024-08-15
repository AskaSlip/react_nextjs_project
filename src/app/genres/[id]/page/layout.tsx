import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "metadata"
};

type Props = {children: React.ReactNode}

const PaginatedGenresMoviesLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
);
};

export default PaginatedGenresMoviesLayout;
