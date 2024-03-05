import React, { useState } from "react";
import styles from "./tools.module.css";

const Tools = () => {
    const [activeTool, setActiveTool] = useState("Geoma");

    const handleToolClick = (tool) => {
        setActiveTool(tool);
    };

    return (
        <div className={styles.toolsSection}>
            <div className="sectionTitle">Используемые сервисы</div>
            <div className={styles.container}>

                <div className={styles.toolCards}>
                    <div
                        className={`${styles.toolImgContainer} ${activeTool === "Geoma" ? styles.active : ""}`}
                        onClick={() => handleToolClick("Geoma")}
                    >
                        <img src="geoma.svg" alt="Geoma" className={styles.toolImg} />
                    </div>

                    <div
                        className={`${styles.toolImgContainer} ${activeTool === "Google Meet" ? styles.active : ""}`}
                        onClick={() => handleToolClick("Google Meet")}
                    >
                        <img src="google-meet.jpg" alt="Google Meet" className={styles.toolImg} />
                    </div>

                    <div
                        className={`${styles.toolImgContainer} ${activeTool === "Google Jamboard" ? styles.active : ""}`}
                        onClick={() => handleToolClick("Google Jamboard")}
                    >
                        <img src="jamboard-logo.jpg" alt="Google Jamboard" className={styles.toolImg} />
                    </div>
                </div>

                <div className={styles.toolDescription}>
                    {activeTool === "Geoma" && (
                        <>
                            <h3 className={styles.toolDescriptionTitle}>Geoma: Интерактивные геометрические задачи</h3>
                            <p className={styles.toolDescriptionText}>
                                Сервис Geoma помогает сделать изучение геометрии увлекательным. Я использую его для создания интерактивных задач, которые делают процесс обучения более наглядным и понятным для учеников.
                            </p>
                        </>
                    )}
                    {activeTool === "Google Meet" && (
                        <>
                            <h3 className={styles.toolDescriptionTitle}>Google Meet: Онлайн-встречи и обсуждение материала</h3>
                            <p className={styles.toolDescriptionText}>
                                Google Meet используется для проведения онлайн-занятий. Это удобное средство для виртуальных встреч, обсуждения тем и разъяснения материала в режиме реального времени.
                            </p>
                        </>
                    )}
                    {activeTool === "Google Jamboard" && (
                        <>
                            <h3 className={styles.toolDescriptionTitle}>Google Jamboard: Совместная доска для творчества</h3>
                            <p className={styles.toolDescriptionText}>
                                Google Jamboard используется для совместной работы над заданиями. Это виртуальная доска, где мы совместно решаем проблемы, обсуждаем идеи и создаём концепции.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tools;
