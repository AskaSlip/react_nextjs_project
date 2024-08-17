"use client"
import React from 'react';
import {useRouter} from "next/navigation";

const ButtonTrailer = ({params:{id}}:{params:{id: number}}) => {

    const router = useRouter()

    return (
        <div>
            <button onClick={() => {
                router.push(id + '/trailer')
            }}>
                Watch trailer
            </button>
        </div>
    );
};

export default ButtonTrailer;