import React from 'react';
import Trailer from "@/components/Trailer/Trailer";
import Link from "next/link";
import styles from './page.module.css'

const TrailerPage =async ({params:{id}}:{params:{id: number}}) => {

    console.log(id);

    return (
        <div className={styles.wrap}>
            <Trailer id={id}/>
            <Link href={`/movies/${id}`}>
                    <button className={styles.btn}>Back to Movie</button>
            </Link>
        </div>
    );
};

export default TrailerPage;