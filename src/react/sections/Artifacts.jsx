// Компоненты
import Section from "@components/Section";
import SecondHeading from "@components/HeadingSecond";
import Slider from "@components/Slider";
import Button from "@components/Button";

// Картинки
import collage from "@img/collage.png";
import swipe from "@img/swipe_to_see_more.png";

export default function Artifacts() {
    return (
        <Section tagName="section" className="artifacts">
            <SecondHeading className="artifacts__heading">Новые артефакты</SecondHeading>
            <Slider enableSliderLogic={false} enableIndicators={false}>
                <div className="artifacts__collage">
                    <img className="artifacts__image" src={collage} alt="" />
                    <img className="artifacts__image" src={swipe} alt="" />
                </div>
            </Slider>
            <div className="artifacts__info">
                <div className="artifacts__info-container">
                    <h3 className="artifacts__info-heading">Kurische Nehrung 24</h3>
                    <p className="artifacts__description">Вот вам яркий пример современных тенденций - начало повседневной работы по формированию позиции выявляет срочную потребность методов управления процессами. <br /> <br />
                        Есть над чем задуматься: представители современных социальных резервов своевременно верифицированы.</p>
                    <Button type="arrow" className="artifacts__button button-black-arrow" classNameArrow="arrow">Подробнее</Button>
                </div>
            </div>
        </Section>
    );
}