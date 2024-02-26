import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import MainPage from "./Pages/MainPage";
import ContactsPage from "./Pages/ContactsPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  </Router>
);
