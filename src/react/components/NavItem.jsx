export default function NavItem({ children }) {
    return (
        <li className="nav__item">
            <a className="nav__link" href="">{children}</a>
        </li>
    );
}