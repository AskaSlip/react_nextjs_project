import React from 'react';
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div>
            <div>
                Search movie
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
                user profile
            </div>
            <hr/>
        </div>
    );
};

export default HeaderComponent;