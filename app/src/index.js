import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import PortfolioPage from "./components/pages/PortfolioPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
    </Router>
);
