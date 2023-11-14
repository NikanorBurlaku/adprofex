import React, { useState } from 'react';
import './Header.css';

function Header() {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    const closeMenu = () => {
        setMenuActive(false);
    }
    return (
        <header>
            <div className="wrapper">
                <img src="img/logo.svg" alt="" className="logo__img" />
                <nav>
                    <ul className={`menu__list ${menuActive ? 'active' : ''}`}>
                        <li><a href="#we" className="menu__list--link" onClick={closeMenu}>About</a></li>
                        <li><a href="#essence" className="menu__list--link" onClick={closeMenu}>Contact</a></li>
                        <li><a href="#suitable" className="menu__list--link" onClick={closeMenu}>Reviews</a></li>
                        <li><a href="#give" className="menu__list--link" onClick={closeMenu}>FAQ</a></li>
                    </ul>
                    <div className={`burger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <a href="#feedback" className={`nav__button ${menuActive ? 'active' : ''}`} onClick={closeMenu}>Есть идея
                        <img src="img/idea.svg" alt="" />
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
