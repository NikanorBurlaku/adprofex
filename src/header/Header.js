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
                    <div className={`menu__container ${menuActive ? 'active' : ''}`}>
                        <ul className={`menu__list ${menuActive ? 'active' : ''}`}>
                            <li><a href="#about" className="menu__list--link" onClick={closeMenu}>About</a></li>
                            <li><a href="#contact" className="menu__list--link" onClick={closeMenu}>Contact</a></li>
                            <li><a href="#review" className="menu__list--link" onClick={closeMenu}>Reviews</a></li>
                            <li><a href="#faq" className="menu__list--link" onClick={closeMenu}>FAQ</a></li>
                        </ul>
                        <div className={`burger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <a href="#contact" className={`nav__button ${menuActive ? 'active' : ''}`} onClick={closeMenu}>Сontact us
                            <img src='img/arrow.svg' alt='' />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
