import React, {FC} from 'react';
import {getPoster} from "@/services/api.services";

interface IProps {
    img: string
}

const PosterPreview: FC<IProps> = ({img}) => {

    let poster = getPoster(img)

    return (
        <div>
            <img src={poster} alt="poster"/>
        </div>
    );
};

export default PosterPreview;