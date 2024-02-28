import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="container footer-container">
                <p className="created-by">© created by Makarov Semen</p>
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="https://vk.com/makaroveo" className="footer-link">
                            <i class="fi fi-brands-vk footer-icon"></i>
                        </a>
                    </li>

                    <li className="footer-item">
                        <a href="https://t.me/makaroveo" className="footer-link">
                            <i class="fi fi-brands-telegram footer-icon"></i>
                        </a>
                    </li>

                    <li className="footer-item">
                        <a href="https://github.com/semonmakarov" className="footer-link">
                            <i class="fi fi-brands-github footer-icon"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
};

export default Footer;
