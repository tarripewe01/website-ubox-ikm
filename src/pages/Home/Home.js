import React from "react";
import Banner from "../../components/Home/Banner";
import Why from "../../components/Home/Why";
import Info from "../../components/Home/Info";
import Cara from "../../components/Home/Cara";
import Action from "../../components/Home/Action";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Why />
      <Info />
      {/* <Cara /> */}
      <Action />
      <Footer />
    </>
  );
};

export default Home;
