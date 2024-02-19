import React from "react";
import "../../App.css";
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Skills from "../skills/Skills";
import Services from "../services/Services";
import Qualification from "../qualification/Qualification";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const MainPage = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Testimonials />
                <Contact />
                <Footer />
            </main>
        </>
    );
};

export default MainPage;
