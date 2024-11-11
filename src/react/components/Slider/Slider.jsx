import { Children, useRef } from "react";

// Компоненты
import { SliderIndicators } from "@components";

// Логика слайдера
import SliderLogic from "@scripts/SliderLogic";

export const Slider = ({ children, enableIndicators = true, enableSliderLogic = true }) => {
    const sliderLogic = enableSliderLogic ? SliderLogic(children) : {};

    const {
        currentIndex = 0,
        sliderRef = useRef(null),
        slideRefs = useRef([]),
        handleSwipeStart = () => { },
        handleSwipeMove = () => { },
        handleSwipeEnd = () => { },
    } = sliderLogic;

    return (
        <div
            className="slider"
            ref={sliderRef}
            onTouchStart={enableSliderLogic ? handleSwipeStart : null}
            onTouchMove={enableSliderLogic ? handleSwipeMove : null}
            onTouchEnd={enableSliderLogic ? handleSwipeEnd : null}
        >
            <div style={{ scrollSnapType: enableSliderLogic ? "x mandatory" : "none", }} className="slider__window">
                <div className="slider__slides">
                    {Children.map(children, (child, index) => (
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
            {enableIndicators && (
                <SliderIndicators slideCount={Children.count(children)} currentIndex={currentIndex} />
            )}
        </div>
    );
};
