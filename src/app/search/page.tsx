import React from 'react';
import Search from "@/components/Search/Search";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

const SearchPage = () => {


    return (
        <div>
            search
            <Search page={1}/>
            <PaginationComponent page={1}/>
        </div>
    );
};

export default SearchPage;