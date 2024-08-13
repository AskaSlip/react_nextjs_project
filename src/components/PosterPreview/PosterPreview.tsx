"use client"
import React from 'react';

interface PosterPreviewProps {
    posterPath: string;
}

const PosterPreview: React.FC<PosterPreviewProps> = ({ posterPath }) => {
    return (
        <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="Movie Poster"
        />
    );
};

export default PosterPreview;