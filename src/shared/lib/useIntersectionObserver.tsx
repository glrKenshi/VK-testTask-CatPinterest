import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOption {
    root?: Element | null;
    rootMargin?: string;
    triggerOnce?: boolean;
    threshold?: number | number[];
}
export const useIntersectionObserver = (options: IntersectionObserverOption = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return { elementRef, isIntersecting };
}