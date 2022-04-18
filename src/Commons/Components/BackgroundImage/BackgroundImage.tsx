import React from 'react';

interface BackgroundImageProps {
    src: string;
    className?: string;
}

function BackgroundImageComponent ({src, className='', ...props}: BackgroundImageProps) {
    return <img className={`absolute object-content ${className}`} src={src} {...props} />;
}

export const BackgroundImage = React.memo(BackgroundImageComponent);
