import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Makarov</h1>
                <ul className="footer__list">
                    <li>
                        <a href="/#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="/portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="/#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://t.me/makaroveo" className="footer__social-link" target="_blank">
                        <i class="fi fi-brands-telegram"></i>
                    </a>

                    <a href="https://vk.com/makaroveo" className="footer__social-link" target="_blank">
                        <i class="fi fi-brands-vk"></i>
                    </a>

                    <a href="https://github.com/semonmakarov" className="footer__social-link" target="_blank">
                        <i class="fi fi-brands-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; 2024 Makarov Semon</span>
            </div>
        </footer>
    )
};

export default Footer;
