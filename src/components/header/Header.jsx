import React from "react";
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <nav className="container header-container">
                <p className="brand-text"><i class="fi fi-sr-graduation-cap"></i>  makaroveo</p>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Главная
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about-lessons" className="nav-link">
                            О занятих
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contacts" className="nav-link">
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
