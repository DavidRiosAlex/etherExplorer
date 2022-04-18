import React from 'react';

interface ScreenCommonProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

function ScreenCommonComponent ({className = '', children}: ScreenCommonProps) {
    return <div className={`w-screen bg-no-repeat h-screen scrollbar overflow-auto ${className}`}>
        {children}
    </div>;
}

export const ScreenCommon = React.memo(ScreenCommonComponent);

export default ScreenCommon;