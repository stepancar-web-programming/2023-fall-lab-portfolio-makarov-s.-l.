import React from "react";
import "./projectsLink.css";
import videoBg from '../../assets/programming_video_2.mp4'

const ProjectsLink = () => {
    return (
        <section className="projectsLink container section" id="projectsLink">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My projects</span>

            <div className="projectsLink__container container">
                <a href="/portfolio">
                    <div className="video-container">
                        <video src={videoBg} autoPlay loop muted className="video-bg" />
                        <div className="overlay">
                            <p className="video-text">Click to view the projects</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default ProjectsLink;
