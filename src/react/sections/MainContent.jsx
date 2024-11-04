// Компоненты
import Button from "@components/Button";
import Section from "@components/Section";

export default function MainContent() {
    return (
        <Section tagName='section' className='main-content'>
            <h1 className="main-content__heading">Крупнейшая коллекция <br /> природных артефактов</h1>
            <p className="main-content__text">Являясь всего лишь частью общей картины, интерактивные прототипы, <br /> которые представляют собой яркий пример европейского типа политической <br /> и социальной культуры.</p>
            <Button type="arrow" className="main-content__button button-simple-arrow" classNameArrow="arrow">Исследовать</Button>
        </Section>
    );
}