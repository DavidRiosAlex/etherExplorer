import { useEffect, useState } from 'react';

interface UseTypingProps {
    text: string;
    delay: number;
    startFromChar: number;
}

export const useTyping = ({text, delay, startFromChar} : UseTypingProps) => {
    const [textTiping, setTextTiping] = useState<string>('');
    useEffect(() => {
        let reverse = false;
        const initialText = text.substring(0, startFromChar);
        const intervalId = setInterval(() => {
            setTextTiping(prev => {
        
                if (!reverse && prev.length !== text.length) {
                    return initialText + text.substring(startFromChar, prev.length + 1);
                } else if (reverse && prev.length !== startFromChar) {
                    return initialText + text.substring(startFromChar, prev.length - 1);
                }
                reverse = !reverse;
                return initialText + text.substring(startFromChar, prev.length);
            });
        },  delay);
        return () => clearInterval(intervalId);
    }, []);
    return textTiping;
};
