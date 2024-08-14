import React, {FC, useState} from 'react';
import {Rating} from "@mui/material";

interface IProps {
    rate: number
}

const StarsRating:FC<IProps> = ({rate}) => {


    return (
        <div>
            <Rating name="half-rating-read" defaultValue={rate} precision={0.5} max={10} readOnly />
        </div>
    )
};

export default StarsRating;