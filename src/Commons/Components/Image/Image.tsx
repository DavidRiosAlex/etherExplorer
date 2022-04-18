import React from 'react';

interface ImageProps {
    src: string;
    className: string;
    styles?: string;
}

function ImageComponent ({className, ...props}: ImageProps) {
    return <img className={`shadow-2xl ${className}`} {...props} />;
}

export const Image = React.memo(ImageComponent);
