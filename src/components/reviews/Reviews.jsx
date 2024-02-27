import React from "react";
import Slider from "react-slick";
import "./reviews.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="section review-section">
            <div className="section-title">Отзывы</div>
            <div className="container review-container">
                <Slider {...settings}>
                    <div className="review-card-container">
                        <div className="review-card">
                            <h3 className="review-person_name">Никита Владимиров</h3>
                            <div className="review-person-container">
                                <img src="review1.jpg" className="review-image" />
                                <p className="review-text">Семен - волшебник в подготовке к ЕГЭ! Его опыт и индивидуальный подход помогли мне не только освоить сложные темы, но и научиться стратегиям успешной сдачи экзамена. Я очень ценю его профессионализм и терпение.</p>
                            </div>

                        </div>
                    </div>

                    <div className="review-card-container">
                        <div className="review-card">
                            <h3 className="review-person_name">Иванов Иван</h3>
                            <div className="review-person-container">
                                <img src="review3.jpg" className="review-image" />
                                <p className="review-text">Я могу с уверенностью рекомендовать Семена в качестве репетитора по ЕГЭ. Он делает приятным как процесс обучения, так и подготовку к экзаменам. Его четкие объяснения помогли мне улучшить свои оценки</p>
                            </div>

                        </div>
                    </div>

                    <div className="review-card-container">
                        <div className="review-card">
                            <h3 className="review-person_name">Егор Балакшин</h3>
                            <div className="review-person-container">
                                <img src="review4.jpg" className="review-image" />
                                <p className="review-text">Семен - настоящий спаситель в мире тестов и экзаменов. С ним подготовка превращается в интересное и продуктивное занятие. Благодаря его поддержке я не только поняла материал, но и получила отличные оценки.</p>
                            </div>

                        </div>
                    </div>

                    <div className="review-card-container">
                        <div className="review-card">
                            <h3 className="review-person_name">Ангелина Романова</h3>
                            <div className="review-person-container">
                                <img src="review2.jpg" className="review-image" />
                                <p className="review-text">Семен не только углубил мои знания, но и помог открыть для себя новые методы обучения. Его регулярные занятия - это не просто обучение, а реальный путь к успеху. Спасибо за ваш профессионализм и терпение.</p>
                            </div>

                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
};

export default Reviews;
