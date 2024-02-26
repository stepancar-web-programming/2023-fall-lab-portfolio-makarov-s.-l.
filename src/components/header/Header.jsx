import React from "react";

const Header = () => {
    return (
        <header className="header" style={{ backdropFilter: "blur(5px)" }}>
            <nav className="container">
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
