import React from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
