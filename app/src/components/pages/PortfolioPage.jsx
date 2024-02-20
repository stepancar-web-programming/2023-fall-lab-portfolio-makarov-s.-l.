import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Projects from "../projects/Projects";


const PortfolioPage = () => {
    return (
        <>
            <Header />
            <main className="portfolio">
                <Projects />
            </main>
            <Footer />
        </>
    );
};

export default PortfolioPage;
