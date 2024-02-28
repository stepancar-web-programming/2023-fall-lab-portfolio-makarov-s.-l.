import React from "react";
import "./services.css"

const Services = () => {
    return (
        <div className="section services-section">
            <div className="section-title">Мои услуги</div>
            <div className="container services-container">
                <div className="flex-container">
                    <div className="service-card">
                        <h3 className="service-title">Подготовка к ЕГЭ</h3>
                        <p className="services-description"> Разработка стратегий, тщательное изучение тем, практика по типовым заданиям для успешной сдачи ЕГЭ.</p>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Подготовка к ОГЭ</h3>
                        <p className="services-description">Индивидуальные подходы, акцент на ключевых темах, поддержка в освоении материала для успешной сдачи ОГЭ.
                        </p>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="service-card">
                        <h3 className="service-title">Контрольные и проверочные</h3>
                        <p className="services-description">Помощь в освоении текущего материала, выполнение заданий, подготовка к проверочным работам и контрольным.</p>
                    </div>

                    <div className="service-card">
                        <h3 className="service-title">Регулярные занятия</h3>
                        <p className="services-description">Гибкий график, систематическое изучение предметов, постоянный контроль и коррекция учебного процесса.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Services;
