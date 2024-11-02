// Компоненты
import NavItem from '@components/NavItem';
import HeaderIconButton from '@components/HeaderIconButton';
import SectionTemplate from '@components/SectionTemplate';

// Дата
import { navItems } from '@data';

// Картинки
import logo from '@svg/logo.svg';


export default function Header() {
    const buttonIcons = [
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 19C8.58172 19 5 15.4183 5 11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11C21 15.4183 17.4183 19 13 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.99998 21L7.34998 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ];
    return (
        <SectionTemplate tagName='header' className='header'>
            <img className="header__logo" src={logo} alt="" />
            {buttonIcons.map((icon, index) => (
                <HeaderIconButton key={index}>{icon}</HeaderIconButton>
            ))}
            <nav className='nav'>
                <ul className="nav__list">
                    {navItems.map((item, index) => (
                        <NavItem key={index}>{item}</NavItem>
                    ))}
                </ul>
            </nav>
        </SectionTemplate>
    );
}