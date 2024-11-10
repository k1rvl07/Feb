import { useState } from "react";

export default function FormLogic(initialFormData = {}) {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: { ...formData[name], value }
        });
    };

    const validateForm = () => {
        const missingFields = [];

        for (const key in formData) {
            if (!formData[key].value) {
                missingFields.push(formData[key].placeholder);
            }
        }

        if (missingFields.length > 0) {
            const message = missingFields.length === 1
                ? `Поле "${missingFields[0]}" обязательно для заполнения.`
                : `Поля "${missingFields.join('", "')}" обязательны для заполнения.`;
            alert(message);
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    Object.keys(formData).reduce((acc, key) => {
                        acc[key] = formData[key].value;
                        return acc;
                    }, {})
                ),
            });

            if (response.ok) {
                alert('Форма успешно отправлена');
            } else {
                alert('Ошибка при отправке формы');
            }
        } catch (error) {
            alert('Произошла ошибка: ' + error.message);
        }
    };

    return { formData, handleChange, handleSubmit };
};