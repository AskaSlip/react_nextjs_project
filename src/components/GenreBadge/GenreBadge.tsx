import React, {FC} from 'react';
import {Badge, Typography} from "@mui/material";

interface IProps {
    genresQuantity: number
}

const GenreBadge:FC<IProps> = ({genresQuantity}) => {
    return (
        <div>
            <Badge color="secondary" overlap="circular" badgeContent={genresQuantity}><Typography>genres{'   '}</Typography>
            </Badge>
        </div>
    );
};

export default GenreBadge;