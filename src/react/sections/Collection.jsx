// Компоненты
import { Section, CollectionCard, Slider, HeadingSecond } from "@components";

// Дата
import { collectionInfo } from "@scripts/data";

export default function Collection() {
    return (
        <Section className="collection" tagName="section">
            <HeadingSecond className="collection__heading">Коллекция</HeadingSecond>
            <Slider>
                {collectionInfo.map(({ img, heading, description }, index) => <CollectionCard key={index} img={img} heading={heading} description={description} />)}
            </Slider>
        </Section>
    );
}