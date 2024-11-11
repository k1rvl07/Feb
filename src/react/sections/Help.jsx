// Компоненты
import { Form, Input, Section, HeadingSecond } from "@components";

// Логика формы
import FormLogic from '@scripts/FormLogic';

export default function Help() {
    const initialFormData = {
        name: { value: '', placeholder: 'Имя' },
        email: { value: '', placeholder: 'Email' }
    };

    const { formData, handleChange, handleSubmit } = FormLogic(initialFormData);

    return (
        <Section className="help" tagName="section">
            <HeadingSecond className="help__heading">Нужна помощь?</HeadingSecond>
            <p className="help__description">
                Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
            </p>
            <Form className="form" onSubmit={handleSubmit}>
                <Input
                    className="form__input input"
                    type="text"
                    name="name"
                    placeholder={formData.name.placeholder}
                    onChange={handleChange}
                />
                <Input
                    className="form__input input"
                    type="email"
                    name="email"
                    placeholder={formData.email.placeholder}
                    onChange={handleChange}
                />
                <Input className="form__submit button-green" type="submit" value="Отправить" />
            </Form>
        </Section>
    );
}