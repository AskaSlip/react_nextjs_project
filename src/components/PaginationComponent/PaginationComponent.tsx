"use client"

import React from 'react';
import {IMovie} from "@/models/IMovie";
import {useSearchParams} from "next/navigation";

interface IProps {
    movies: IMovie[];
    currentPage: number;
    totalPages: number;
}

const PaginationComponent= () => {


    // const searchParams = useSearchParams();
    // const setSearchParams = useSearchParams()[1];
    // const page = parseInt(searchParams.get('page') || '1', 10);
    //
    // const handlePageChange = (newPage: number) => {
    //     const params = new URLSearchParams(searchParams.toString());
    //     params.set('page', newPage.toString());
    //     setSearchParams(params.toString());
    // };


    return (
        <div >
            {/*<button*/}
            {/*    onClick={() => handlePageChange(page - 1)}*/}
            {/*    disabled={page === 1}*/}
            {/*>*/}
            {/*    Prev*/}
            {/*</button>*/}
            {/*<button onClick={() => handlePageChange(page + 1)}>*/}
            {/*    Next*/}
            {/*</button>*/}
        </div>
    )
        ;
};

export default PaginationComponent;