import React from "react";
import "./aboutMe.css"

const AboutMe = () => {
    return (
        <div className="section aboutMe-section">
            <div className="section-title">Обо мне</div>
            <div className="container aboutMe-container">
                <div className="aboutMe-img"></div>
                <p className="aboutMe-information"></p>
            </div>
        </div>
    )
};

export default AboutMe;
