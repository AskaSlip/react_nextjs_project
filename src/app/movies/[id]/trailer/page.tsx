import React from 'react';
import Trailer from "@/components/Trailer/Trailer";
import Link from "next/link";

const TrailerPage =async ({params:{id}}:{params:{id: number}}) => {

    console.log(id);

    return (
        <div>
            <Trailer id={id}/>
            <Link href={`/movies/${id}`}>
                    <button>Back to Movie</button>
            </Link>
        </div>
    );
};

export default TrailerPage;