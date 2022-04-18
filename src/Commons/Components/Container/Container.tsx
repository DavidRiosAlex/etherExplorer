import React from 'react';

interface ContainerProps {
    children: Element[];
}

function ContainerComponent ({children}: ContainerProps) {
    return <div className="w-f">{children}</div>;
}

export const Container = React.memo(ContainerComponent);