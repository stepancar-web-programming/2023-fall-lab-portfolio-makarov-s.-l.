import React, { useState, useEffect } from "react";
import styles from "./format.module.css";

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
        <div className={styles.formatSection}>
            <div className="sectionTitle">О формате занятий</div>
            <div className={styles.container}>
                <div className={styles.formatVideo}>
                    <video src="online.mp4" video autoplay loop muted playsinline webkit-playinginline className={styles.videoBg} />
                </div>
                <div className={styles.formatInformationContainer}>
                    <p className={styles.formatInformationText}>Преимущества онлайн-формата:</p>
                    <ul className={styles.advantagesList}>
                        {advantages.map((advantage, index) => (
                            <li
                                key={index}
                                className={styles.advantageItem}
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
