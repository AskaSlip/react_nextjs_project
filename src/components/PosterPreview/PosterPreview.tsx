import React, {FC} from 'react';
import {getPoster} from "@/services/api.services";
import styles from './Poster.module.css'

interface IProps {
    img: string
    size: number
}

const PosterPreview: FC<IProps> = ({img,size}) => {

    let poster = getPoster(img,size)

    return (
        <div>
            <img className={styles.poster} src={poster} alt="poster"/>
        </div>
    );
};

export default PosterPreview;