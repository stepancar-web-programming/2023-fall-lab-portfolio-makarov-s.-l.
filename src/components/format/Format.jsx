import React, { useState, useEffect } from "react";
import "./format.css";

const Format = () => {
    const [advantages, setAdvantages] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                setAdvantages([
                    "•  Гибкий график",
                    "•  Возможность повторного просмотра",
                    "•  Индивидуальный подход",
                    "•  Больше возможностей для обратной связи",
                    "•  Экономия времени на дорогу"
                ]);
            }, 2000);
        };

        fetchData();
    }, []);

    return (
        <div className="section format-section">
            <div className="section-title">О формате занятий</div>
            <div className="container format-container">
                <div className="format-video">
                    <video src="online.mp4" autoPlay loop muted className="video-bg" />
                </div>
                <div className="format-information-container">
                    <p className="format-information-text">Преимущества онлайн-формата:</p>
                    <ul className="advantages-list">
                        {advantages.map((advantage, index) => (
                            <li
                                key={index}
                                className="advantage-item animate-opacity"
                                style={{ animationDelay: `${index * 0.5}s` }}
                            >
                                {advantage}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Format;
