import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project1 from '../../assets/work1.jpg'
import Project2 from '../../assets/work2.jpg'
import Project3 from '../../assets/work3.jpg';
import Project4 from '../../assets/work4.jpg';
import "./projects.css";

const projectsData = [
    {
        id: 1,
        title: "Распознавание изображений",
        description: "Разработка модели машинного обучения для распознавания объектов на изображениях.",
        image: Project1,
        details: "Проект включает в себя сбор и обработку датасета изображений, выбор и настройку архитектуры нейронной сети, обучение модели на GPU, а также оценку ее производительности. Проведены эксперименты с различными оптимизаторами и функциями активации. Результаты продемонстрированы на тестовых данных, с достижением точности распознавания объектов на уровне 90%.",
    },
    {
        id: 2,
        title: "Project 2",
        description: "Short description for Project 2.",
        image: Project2,
        details: "Detailed description for Project 2.",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Short description for Project 3.",
        image: Project3,
        details: "Detailed description for Project 3.",
    },
    {
        id: 4,
        title: "Project 4",
        description: "Short description for Project 4.",
        image: Project4,
        details: "Detailed description for Project 4.",
    }
];

const Projects = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openPopup = (project) => {
        setSelectedProject(project);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="projects section">
            <h2 className="section__title">My works</h2>
            <span className="section__subtitle">See my personal projects</span>
            <div className="projects__container container">
                <Carousel responsive={responsive}>
                    {projectsData.map((project) => (
                        <div className="project-card__container">
                            <div
                                key={project.id}
                                className="project-card"
                                onClick={() => openPopup(project)}
                            >
                                <img src={project.image} alt={project.title} />
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p className="details">{project.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {showPopup && (
                <div className="popup" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <span className="popup-close" onClick={closePopup}>
                            &times;
                        </span>
                        {selectedProject && (
                            <>
                                <img src={selectedProject.image} alt={selectedProject.title} />
                                <h3>{selectedProject.title}</h3>
                                <p>{selectedProject.details}</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
