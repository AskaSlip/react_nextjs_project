import React, {FC} from 'react';
import {getPoster} from "@/services/api.services";
import styles from './Poster.module.css'

interface IProps {
    img: string
}

const PosterPreview: FC<IProps> = ({img}) => {

    let poster = getPoster(img)

    return (
        <div>
            <img className={styles.poster} src={poster} alt="poster"/>
        </div>
    );
};

export default PosterPreview;