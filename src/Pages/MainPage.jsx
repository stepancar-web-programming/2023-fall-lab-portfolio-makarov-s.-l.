import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutMe from "../components/aboutMe/AboutMe";
import Services from "../components/services/Services";
import Reviews from "../components/reviews/Reviews";

const MainPage = () => {
    return (
        <>
            <Header />
            <AboutMe />
            <Services />
            <Reviews />
            <Footer />
        </>
    )
};

export default MainPage;
