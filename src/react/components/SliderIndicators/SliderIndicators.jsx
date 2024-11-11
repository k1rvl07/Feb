export const SliderIndicators = ({ slideCount, currentIndex }) => {
    const indicators = Array.from({ length: slideCount }, (_, index) => (
        <div
            key={index}
            className={`slider__indicator ${index === currentIndex ? 'active' : ''}`}
        ></div>
    ));

    return (
        <div className="slider__indicators">
            {indicators}
        </div>
    );
}