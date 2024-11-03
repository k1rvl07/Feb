import { useRef, useEffect, useState, Children } from "react";

export const useSliderLogic = (children) => {
    const slideCount = Children.count(children);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const slideRefs = useRef([]);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    useEffect(() => {
        const options = {
            root: sliderRef.current,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = slideRefs.current.indexOf(entry.target);
                    setCurrentIndex(index);
                }
            });
        }, options);

        slideRefs.current.forEach(slide => {
            if (slide) {
                observer.observe(slide);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleSwipeStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleSwipeMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleSwipeEnd = () => {
        if (touchStartX.current && touchEndX.current) {
            const distance = touchStartX.current - touchEndX.current;
            const isLeftSwipe = distance > 50;
            const isRightSwipe = distance < -50;

            if (isLeftSwipe) {
                handleSwipe('right');
            } else if (isRightSwipe) {
                handleSwipe('left');
            }
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const handleSwipe = (direction) => {
        const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
        if (newIndex >= 0 && newIndex < slideCount) {
            setCurrentIndex(newIndex);
            slideRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    };

    return {
        currentIndex,
        sliderRef,
        slideRefs,
        handleSwipeStart,
        handleSwipeMove,
        handleSwipeEnd,
    };
};