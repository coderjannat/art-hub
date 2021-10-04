import React from "react";

import Footer from "../Footer/Footer";

import AllService from "../Service/AllService";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <div>
     
      <Banner></Banner>
     
      <AllService></AllService>
      <Footer></Footer>
    </div>
  );
};

export default Home;
