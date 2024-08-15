import React from 'react';
import Link from "next/link";
import UserInfo from "@/components/UserInfo/UserInfo";

const HeaderComponent = () => {
    return (
        <div>
            <div>
                <Link href={'/search'}>Search Movie</Link>
            </div>
            <div>
                <Link href={'/'}>Home</Link>
            </div>
            <div>
                <Link href={'/movies'}>Movies</Link>
            </div>
            <div>
                <Link href={'/genres'}>Genres</Link>
            </div>
            <div>
                Theme
            </div>
            <div>
                notification
            </div>
            <div>
                <UserInfo/>
            </div>
            <hr/>
        </div>
    );
};

export default HeaderComponent;