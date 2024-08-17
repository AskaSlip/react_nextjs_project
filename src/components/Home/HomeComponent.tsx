import React from 'react';
import TopRated from "@/components/TopRated/TopRated";
import styles from './HomeComponent.module.css'
import Upcoming from "@/components/Upcoming/Upcoming";

const HomeComponent = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.leftSide}>
                <img className={styles.img} src="/home.jpg" alt="nav-img"/>
            </div>

            <div className={styles.rightSide}>
                <div>
                    <Upcoming/>
                </div>
                <div className={styles.rated}>
                    <TopRated/>
                </div>

            </div>
        </div>
    );
};

export default HomeComponent;