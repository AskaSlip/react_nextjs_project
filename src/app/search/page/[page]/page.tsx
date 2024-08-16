import React from 'react';
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import Search from "@/components/Search/Search";

const SearchByPagePage = ({params:{page}}:{params:{page: number}}) => {

    console.log(page);
    return (
        <div>
            <Search page={page}/>
            <PaginationComponent page={page}/>
        </div>
    );
};

export default SearchByPagePage;