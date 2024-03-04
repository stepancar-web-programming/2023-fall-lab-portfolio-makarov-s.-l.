import React from "react";
import Slider from "react-slick";
import styles from "./reviews.module.css";
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
        <div className={styles.reviewSection}>
            <div className="sectionTitle">Отзывы</div>
            <div className={styles.reviewContainer}>
                <Slider {...settings}>
                    <div className={styles.reviewCardContainer}>
                        <div className={styles.reviewCard}>
                            <h3 className={styles.reviewPersonName}>Никита Владимиров</h3>
                            <div className={styles.reviewPersonContainer}>
                                <img src="review1.jpg" alt="review1" className={styles.reviewImage} />
                                <p className={styles.reviewText}>Семен - волшебник в подготовке к ЕГЭ! Его опыт и индивидуальный подход помогли мне не только освоить сложные темы, но и научиться стратегиям успешной сдачи экзамена. Я очень ценю его профессионализм и терпение.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.reviewCardContainer}>
                        <div className={styles.reviewCard}>
                            <h3 className={styles.reviewPersonName}>Башарим Евгенов</h3>
                            <div className={styles.reviewPersonContainer}>
                                <img src="review3.jpg" alt="review3" className={styles.reviewImage} />
                                <p className={styles.reviewText}>Я могу с уверенностью рекомендовать Семена в качестве репетитора по ЕГЭ. Он делает приятным как процесс обучения, так и подготовку к экзаменам. Его четкие объяснения помогли мне улучшить свои оценки</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.reviewCardContainer}>
                        <div className={styles.reviewCard}>
                            <h3 className={styles.reviewPersonName}>Егор Балакшин</h3>
                            <div className={styles.reviewPersonContainer}>
                                <img src="review4.jpg" alt="review4" className={styles.reviewImage} />
                                <p className={styles.reviewText}>Семен - настоящий спаситель в мире тестов и экзаменов. С ним подготовка превращается в интересное и продуктивное занятие. Благодаря его поддержке я не только поняла материал, но и получила отличные оценки.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.reviewCardContainer}>
                        <div className={styles.reviewCard}>
                            <h3 className={styles.reviewPersonName}>Аноха Никитин</h3>
                            <div className={styles.reviewPersonContainer}>
                                <img src="review5.jpg" alt="review5" className={styles.reviewImage} />
                                <p className={styles.reviewText}>Семен не только углубил мои знания, но и помог открыть для себя новые методы обучения. Его регулярные занятия - это не просто обучение, а реальный путь к успеху. Спасибо за ваш профессионализм и терпение.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;
