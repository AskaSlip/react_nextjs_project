"use client"
import React from 'react';
import {useRouter} from "next/navigation";


const PaginationComponent= ({page}: {page: number | string}) => {

const router = useRouter()
const pageNumber: number = Number(page)

    const currentUrl = window ? window.location.href : null;
console.log(currentUrl);

//todo fix url

    return (
        <div >
            <button onClick={() => {
                router.push(currentUrl + '/page/' + (pageNumber - 1))
            }} disabled={pageNumber === 1}>
                prev
            </button>
            <button onClick={() => {
                router.push(currentUrl + '/page/' + (pageNumber + 1))
            }} disabled={pageNumber === 500}>
                next
            </button>
        </div>
    )
        ;
};

export default PaginationComponent;