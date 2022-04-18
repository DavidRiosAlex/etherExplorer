import React from 'react';

interface TextComponentProps {
    className?: string;
    children?: string;
}

function TextComponent ({className, ...props}: TextComponentProps) {
    return <span {...props} className={`dark:font-white tracking-wide font-lato ${className}`}></span>;
}

export const Text = React.memo(TextComponent);
