import React from "react";
import styles from "./aboutMe.css"

const AboutMe = () => {
    return (
        <div className="section aboutMe-section">
            <div className="section-title">Обо мне</div>
            <div className="container aboutMe-container">
                <img src="aboutMe.jpg" alt="Макаров Семён" className="aboutMe-img" />
                <div className="aboutMe-information">
                    <div className="aboutMe-title-container">
                        <i class="fi fi-sr-chalkboard-user"></i>
                        <div className="">
                            <h1 className="aboutMe-name">Макаров Семён</h1>
                            <h3 className="aboutMe-title">Репетитор по математике</h3>
                        </div>

                    </div>

                    <p className="aboutMe-text">
                        Приветствую вас на моем персональном сайте!<br />
                        В школьные годы я увлекался математикой и неоднократно занимал призовые места на Всероссийских олимпиадах.
                        <br /><br />Сейчас я уже больше года занимаюсь репетиторством, помогая ребятам готовиться к ЕГЭ, ОГЭ и просто совершенствовать свои способности. Моя цель - сделать процесс обучения увлекательным и эффективным и помочь каждому ученику раскрыть свой академический потенциал. Добро пожаловать в мир знаний и успеха!</p>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
