"use client"
import React from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import styles from './Pagination.module.css'

const PaginationComponent= ({page, totalPages, hide}: {page: number | string, totalPages: number | null, hide?: boolean}) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    console.log(totalPages);

    if (totalPages === null || hide){
        return <></>
    }


    const pageNumber: number = Number(page);

    const pageRegex = /\/page\/\d+/;

    const createPageUrl = (newPage: number) => {
        if (pageRegex.test(pathname)) {
            return pathname.replace(pageRegex, `/page/${newPage}`) + `?${searchParams.toString()}`;
        } else {
            return `${pathname}/page/${newPage}?${searchParams.toString()}`;
        }
    };


    return (
        <div className={styles.wrap}>
            <button className={`${styles.btn} ${styles.left}`}
                onClick={() => {
                    if (pageNumber > 1) {
                        router.push(createPageUrl(pageNumber - 1));
                    }
                }}
                disabled={pageNumber === 1}
            >
                <img src="/arrow.png" alt="arrow"/>
            </button>
            <button className={`${styles.btn} ${styles.right}`}
                onClick={() => {
                    if (pageNumber < 500) {
                        router.push(createPageUrl(pageNumber + 1));
                    }
                }}
                disabled={pageNumber === totalPages}
            >
                <img src="/arrow.png" alt="arrow"/>
            </button>
        </div>
    )
        ;
};

export default PaginationComponent;