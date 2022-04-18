import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

interface AnimatedTypingProps {
    text: string;
    delay: number;
    className?: string;
    startFromChar?: number;
    writer: (type: any) => void;
}

function AnimatedTypingComponent ({writer, text, ...props}: AnimatedTypingProps) {
    const spanRef = useRef(null);
    useEffect(() => {
        if (spanRef.current) {
            const typewriter = new Typewriter(spanRef.current, {
                delay: 100,
            });
            typewriter
                .pauseFor(2500)
                .typeString(text);      
            writer(typewriter);
            typewriter.start();
        }
    }, []);
    return <span ref={spanRef} {...props}>Desarrollador</span>;
}

export const AnimatedTyping = React.memo(AnimatedTypingComponent);
