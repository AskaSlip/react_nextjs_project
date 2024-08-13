import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
  title: "trailer"
};

type Props = {children: React.ReactNode}

const TrailerLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
);
};

export default TrailerLayout;
