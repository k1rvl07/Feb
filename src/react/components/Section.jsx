// Компоненты
import Container from '@components/Container';

export default function Section({ tagName, className, children }) {
    const Tag = tagName;

    return (
        <Tag className={className}>
            <Container>
                <div className={`${className}__container`}>
                    {children}
                </div>
            </Container>
        </Tag>
    );
};
