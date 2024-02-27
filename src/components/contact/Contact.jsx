import React from "react";
import "./contact.css"

const Contact = () => {
    return (
        <div className="section contact-section">
            <div className="section-title">Контакты</div>
            <div className="container contact-container">
                <div className="contact-info">
                    <h3>Свяжитесь со мной:</h3>
                    <p>Телефон: +7 (933) 200-1407</p>
                    <p>Email: semon.makarov.2003@mail.ru</p>
                </div>

                <div className="social-links">
                    <h3>Я в соцсетях:</h3>
                    <ul>
                        <li><a href="https://t.me/makaroveo" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                        <li><a href="https://vk.com/makaroveo" target="_blank" rel="noopener noreferrer">Vkontakte</a></li>
                        <li><a href="https://www.instagram.com/makaroveo" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
