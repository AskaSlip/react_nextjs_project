import React, {FC} from 'react';
import {Badge, Typography} from "@mui/material";
import styles from './GenreBadge.module.css'

interface IProps {
    genresQuantity: number
}

const GenreBadge:FC<IProps> = ({genresQuantity}) => {
    return (
        <div>
            <Badge color="secondary" overlap="circular" badgeContent={genresQuantity}><Typography className={styles.text}>genres</Typography>
            </Badge>
        </div>
    );
};

export default GenreBadge;