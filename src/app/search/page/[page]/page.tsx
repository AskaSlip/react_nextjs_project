import React from 'react';
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import Search from "@/components/Search/Search";
import styles from './page.module.css'

const SearchByPagePage = ({params:{page}}:{params:{page: number}}) => {

    return (
        <div className={styles.wrap}>
            <Search page={page}/>
            {/*<PaginationComponent page={page}/>*/}
        </div>
    );
};

export default SearchByPagePage;