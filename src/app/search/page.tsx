import React from 'react';
import Search from "@/components/Search/Search";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import styles from './page.module.css'

const SearchPage = () => {


    return (
        <div className={styles.wrap}>
            <Search page={1}/>
            {/*<PaginationComponent page={1}/>*/}
        </div>
    );
};

export default SearchPage;