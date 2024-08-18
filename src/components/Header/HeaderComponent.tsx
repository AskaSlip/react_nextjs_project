"use client"
import React from 'react';
import Link from "next/link";
import UserInfo from "@/components/UserInfo/UserInfo";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Notification from "@/components/Notification/Notification";
import styles from './Header.module.css'
import {useAppSelector} from "@/redux/store/store";

const HeaderComponent = () => {
    let {theme} = useAppSelector(state => state.ThemeSliceState )

    return (
        <div className={`${styles.wrap} ${theme === 'light' ? 'light-box' : 'dark-box'}`}>
            <div className={styles.links}>
                <div>
                    <Link className={styles.link} href={'/'}>Home</Link>
                </div>
                <div>
                    <Link className={styles.link} href={'/search'}>Search Movie</Link>
                </div>
                <div>
                    <Link className={styles.link} href={'/movies'}>Movies</Link>
                </div>
                <div>
                    <Link  className={styles.link} href={'/genres'}>Genres</Link>
                </div>
            </div>

            <div className={styles.user}>
                <div>
                    <ThemeSwitcher/>
                </div>
                <div>
                    <Notification/>
                </div>
                <div>
                    <UserInfo/>
                </div>
            </div>

        </div>
    );
};

export default HeaderComponent;