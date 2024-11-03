import React from "react";

// Компоненты
import SliderIndicators from "@components/SliderIndicators";

// Скрипты
import { useSliderLogic } from "@scripts/SliderLogic";


export default function Slider({ children }) {
    const {
        currentIndex,
        sliderRef,
        slideRefs,
        handleSwipeStart,
        handleSwipeMove,
        handleSwipeEnd,
    } = useSliderLogic(children);

    return (
        <div
            className="slider"
            ref={sliderRef}
            onTouchStart={handleSwipeStart}
            onTouchMove={handleSwipeMove}
            onTouchEnd={handleSwipeEnd}
        >
            <div className="slider__window">
                <div className="slider__slides">
                    {React.Children.map(children, (child, index) => (
                        <div
                            key={index}
                            className="slider__slide"
                            ref={el => slideRefs.current[index] = el}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <SliderIndicators slideCount={React.Children.count(children)} currentIndex={currentIndex} />
        </div>
    );
};