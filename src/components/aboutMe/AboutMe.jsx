import React from "react";
import styles from "./aboutMe.module.css";

const AboutMe = () => {
    return (
        <div className={styles.aboutMeSection}>
            <div className="sectionTitle">Обо мне</div>
            <div className={styles.aboutMeContainer}>
                <img src="aboutMe.jpg" className={styles.aboutMeImg} />
                <div className={styles.aboutMeInformation}>
                    <div className={styles.aboutMeTitleContainer}>
                        <i className={`fi fi-sr-chalkboard-user ${styles.teacherIcon}`}></i>
                        <div className="">
                            <h1 className={styles.aboutMeName}>Макаров Семён</h1>
                            <h3 className={styles.aboutMeTitle}>Репетитор по математике</h3>
                        </div>
                    </div>
                    <p className={styles.aboutMeText}>
                        Приветствую вас на моем персональном сайте!<br />
                        В школьные годы я увлекался математикой и неоднократно занимал призовые места на Всероссийских олимпиадах.
                        <br /><br />Сейчас я уже больше года занимаюсь репетиторством, помогая ребятам готовиться к ЕГЭ, ОГЭ и просто совершенствовать свои способности. Моя цель - сделать процесс обучения увлекательным и эффективным и помочь каждому ученику раскрыть свой академический потенциал. Добро пожаловать в мир знаний и успеха!</p>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
