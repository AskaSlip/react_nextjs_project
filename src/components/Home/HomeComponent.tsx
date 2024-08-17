import React from 'react';
import TopRated from "@/components/TopRated/TopRated";
import styles from './HomeComponent.module.css'
import Upcoming from "@/components/Upcoming/Upcoming";
import Button from "@/components/ButtonHome/Button";

const HomeComponent = () => {


    return (
        <div className={styles.wrap}>
            <div className={styles.leftSide}>
                <img className={styles.img} src="/home.jpg" alt="nav-img"/>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.moviesWrap}>
                    <p className={styles.title}>Coming soon...</p>
                    <Upcoming/>

                </div>
                <div className={styles.rated}>
                    <p className={styles.title}>Top-3 movies by rating</p>
                    <TopRated/>
                </div>
                <Button/>
            </div>
        </div>
    );
};

export default HomeComponent;