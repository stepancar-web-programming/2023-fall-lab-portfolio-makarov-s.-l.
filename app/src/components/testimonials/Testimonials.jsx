import React from "react";
import "./testimonials.css"
import { Data } from "./Data"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    return (
        <section className="testimonial container section" id="testimonials">
            <h2 className="section__title">Testimonials</h2>
            <span className="section__subtitle">My clients say</span>

            <Slider
                className="testimonial__container" {...settings}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <div className="testimonial__card__container">
                            <div className="testimonial__card" key={id} >
                                <img src={image} alt="" className="testimonial__img" />

                                <h3 className="testimonial__title">{title}</h3>
                                <p className="testimonial__description">{description}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </section >
    )
};

export default Testimonials;
