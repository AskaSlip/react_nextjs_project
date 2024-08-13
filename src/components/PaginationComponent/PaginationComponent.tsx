import React, {FC} from 'react';
import {useRouter} from "next/router";


interface IProps {
    currentPage: number;
    totalPages: number
}

const PaginationComponent:FC<IProps> = ({currentPage,totalPages}) => {

    const router = useRouter();

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            router.push(`/?page=${page}`);
        }
    };

    return (
        <div>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}>
                Previous
             </button>
    <span> Page {currentPage} of {totalPages} </span>
            <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
        </button>
</div>
)
    ;
};

export default PaginationComponent;