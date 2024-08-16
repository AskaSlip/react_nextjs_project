"use client"
import React from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";


const PaginationComponent= ({page}: {page: number | string}) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pageNumber: number = Number(page);

    const pageRegex = /\/page\/\d+/;

    const createPageUrl = (newPage: number) => {
        if (pageRegex.test(pathname)) {
            return pathname.replace(pageRegex, `/page/${newPage}`) + `?${searchParams.toString()}`;
        } else {
            return `${pathname}/page/${newPage}?${searchParams.toString()}`;
        }
    };
//todo fix url

    return (
        <div>
            <button
                onClick={() => {
                    if (pageNumber > 1) {
                        router.push(createPageUrl(pageNumber - 1));
                    }
                }}
                disabled={pageNumber === 1}
            >
                prev
            </button>
            <button
                onClick={() => {
                    if (pageNumber < 500) {
                        router.push(createPageUrl(pageNumber + 1));
                    }
                }}
                disabled={pageNumber === 500}
            >
                next
            </button>
        </div>
    )
        ;
};

export default PaginationComponent;