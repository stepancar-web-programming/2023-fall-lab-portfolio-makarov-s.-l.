import React from "react";
import styles from "./services.module.css";

const Services = () => {
    return (
        <div className={styles.servicesSection}>
            <div className="sectionTitle">Мои услуги</div>
            <div className={styles.servicesContainer}>
                <div className={styles.flexContainer}>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>Подготовка к ЕГЭ</h3>
                        <p className={styles.servicesDescription}>Разработка стратегий, тщательное изучение тем, практика по типовым заданиям для успешной сдачи ЕГЭ.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>Подготовка к ОГЭ</h3>
                        <p className={styles.servicesDescription}>Индивидуальные подходы, акцент на ключевых темах, поддержка в освоении материала для успешной сдачи ОГЭ.</p>
                    </div>
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>Контрольные и проверочные</h3>
                        <p className={styles.servicesDescription}>Помощь в освоении текущего материала, выполнение заданий, подготовка к проверочным работам и контрольным.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>Регулярные занятия</h3>
                        <p className={styles.servicesDescription}>Гибкий график, систематическое изучение предметов, постоянный контроль и коррекция учебного процесса.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
