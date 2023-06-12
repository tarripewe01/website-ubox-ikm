import React from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
