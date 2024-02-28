import React, { useState } from 'react'
import "./header.css"


const Header = () => {
    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);

    return (

        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">Makarov</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"} >
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="/#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#testimonials" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Testimonials
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/portfolio" className="nav__link nav__link-portfolio">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>


                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>

                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>


    )
}

export default Header
