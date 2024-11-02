// Компоненты
import SectionTemplate from "@components/SectionTemplate";

export default function MainContent() {
    const mainContentArrow =
        <svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.7071 8.20711C44.0976 7.81658 44.0976 7.18342 43.7071 6.79289L37.3431 0.428932C36.9526 0.0384078 36.3195 0.0384078 35.9289 0.428932C35.5384 0.819457 35.5384 1.45262 35.9289 1.84315L41.5858 7.5L35.9289 13.1569C35.5384 13.5474 35.5384 14.1805 35.9289 14.5711C36.3195 14.9616 36.9526 14.9616 37.3431 14.5711L43.7071 8.20711ZM0 8.5L43 8.5V6.5L0 6.5L0 8.5Z" fill="currentColor" />
        </svg>;

    return (
        <SectionTemplate tagName='section' className='main-content'>
            <h1 className="main-content__title">Крупнейшая коллекция <br /> природных артефактов</h1>
            <p className="main-content__text">Являясь всего лишь частью общей картины, интерактивные прототипы, <br /> которые представляют собой яркий пример европейского типа политической <br /> и социальной культуры.</p>
            <button className="main-content__button">Исследовать <span className="main-content__arrow">{mainContentArrow}</span></button>
        </SectionTemplate>
    );
}