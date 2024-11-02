// Компоненты
import NavItem from '@components/NavItem';
import Container from '@components//Container';

// Картинки
import logo from '@svg/logo.svg';
import search from '@svg/search.svg';
import login from '@svg/log-in.svg';


export default function Header() {
    console.log(logo);
    return (

        <header>
            <Container>
                <img src={logo} alt="" />
                <img src={search} alt="" />
                <img src={login} alt="" />
                <nav>
                    <ul>
                        <NavItem>Каталог</NavItem>
                        <NavItem>Галерея</NavItem>
                        <NavItem>О лаборатории</NavItem>
                        <NavItem>Контакты</NavItem>
                    </ul>
                </nav>
            </Container>
        </header >
    );
}