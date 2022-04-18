import React from 'react';

interface ButtonProps {
    onPress: () => void;
    className?: string;
    children?: string;
}

function ButtonComponent ({onPress, className='', children}: ButtonProps) {
    return <span onClick={onPress} className={`h-12 w-1/6 cursor-pointer text-center text-white align-middle break-words whitespace-normal p-2 ${className}`}>{children}</span>;
}

export const Button = React.memo(ButtonComponent);