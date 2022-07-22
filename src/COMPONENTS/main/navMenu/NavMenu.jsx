import css from './NavMenu.module.css'
import { NavLink     } from "react-router-dom";

function NavMenu(props) {
    const isActive = (data) => data.isActive ? css.linkActive : css.link

    return (
        <nav className={css.navMenu}>
            <ul className={css.navMenu__list}>
                <li className={css.navMenu__item}>
                    <NavLink className={isActive} to="/profile">Profile</NavLink>
                </li>

                <li className={css.navMenu__item}>
                    <NavLink className={isActive} to="/friends">Friends</NavLink>
                </li>

                <li className={css.navMenu__item}>
                    <NavLink className={isActive} to="/message/choose">Messages</NavLink>
                </li>

                <li className={css.navMenu__item}>
                    <NavLink className={isActive} to="/feed">Feed</NavLink>                    
                </li>

            </ul>
        </nav>
    )
}

export default NavMenu;