import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header/>
    <Router>
      <Routes>
        {/* add page routes here */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <Footer/>
  </React.StrictMode>
);

