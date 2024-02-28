import React, { useState } from "react";
import './tools.css'

const Tools = () => {
    const [activeTool, setActiveTool] = useState("Geoma");

    const handleToolClick = (tool) => {
        setActiveTool(tool);
    };

    return (
        <div className="section tools-section">
            <div className="section-title">Используемые сервисы</div>
            <div className="container tools-container">

                <div className="tool-cards">
                    <div
                        className={`tool-img-container ${activeTool === "Geoma" ? "active" : ""}`}
                        onClick={() => handleToolClick("Geoma")}
                    >
                        <img src="geoma.svg" alt="Geoma" className="tool-img" />
                    </div>

                    <div
                        className={`tool-img-container ${activeTool === "Google Meet" ? "active" : ""}`}
                        onClick={() => handleToolClick("Google Meet")}
                    >
                        <img src="google-meet.jpg" alt="Google Meet" className="tool-img" />
                    </div>

                    <div
                        className={`tool-img-container ${activeTool === "Google Jamboard" ? "active" : ""}`}
                        onClick={() => handleToolClick("Google Jamboard")}
                    >
                        <img src="jamboard-logo.jpg" alt="Google Jamboard" className="tool-img" />
                    </div>
                </div>

                <div className="tool-description">
                    {activeTool === "Geoma" && (
                        <>
                            <h3 className="tool-description-title">Geoma: Интерактивные геометрические задачи</h3>
                            <p className="tool-description-text">
                                Сервис Geoma помогает сделать изучение геометрии увлекательным. Я использую его для создания интерактивных задач, которые делают процесс обучения более наглядным и понятным для учеников.
                            </p>
                        </>
                    )}
                    {activeTool === "Google Meet" && (
                        <>
                            <h3 className="tool-description-title">Google Meet: Онлайн-встречи и обсуждение материала</h3>
                            <p className="tool-description-text">
                                Google Meet используется для проведения онлайн-занятий. Это удобное средство для виртуальных встреч, обсуждения тем и разъяснения материала в режиме реального времени.
                            </p>
                        </>
                    )}
                    {activeTool === "Google Jamboard" && (
                        <>
                            <h3 className="tool-description-title">Google Jamboard: Совместная доска для творчества</h3>
                            <p className="tool-description-text">
                                Google Jamboard используется для совместной работы над заданиями. Это виртуальная доска, где мы совместно решаем проблемы, обсуждаем идеи и создаём концепции.
                            </p>
                        </>
                    )}
                </div>
            </div >
        </div >
    );
};

export default Tools;
