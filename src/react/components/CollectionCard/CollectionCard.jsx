// Компоненты
import { Button } from "@components";

export const CollectionCard = ({ img, heading, description }) => {
    return (
        <div className="card">
            <div className="card__image-container"><img className="card__image" src={img} alt="" /></div>
            <div className="card__content">
                <h4 className="card__heading">{heading}</h4>
                <p className="card__description">{description}</p>
                <Button className="card__button button-transparent-text">Подробнее</Button>
            </div>
        </div>
    );
}