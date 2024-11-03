// Компоненты
import SectionTemplate from "@components/SectionTemplate";
import CollectionCard from "@components/CollectionCard";
import Slider from "@components/Slider";
import SecondHeading from "@components/HeadingSecond";

// Дата
import { collectionInfo } from "@scripts/data";

export default function Collection() {
    return (
        <SectionTemplate className="collection" tagName="section">
            <SecondHeading className="collection__heading">Коллекция</SecondHeading>
            <Slider>
                {collectionInfo.map(({ img, heading, description }, index) => <CollectionCard key={index} img={img} heading={heading} description={description} />)}
            </Slider>
        </SectionTemplate>
    );
}