import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" ">


      <div className="banner-container">
        
        <div className="row d-flex  align-items-center justify-content-center">
        <MenuBar></MenuBar>
          <div className="col-md-6">
            <h1 className="title">
              <Flip left>
                Every child is an artist!!
              </Flip>

            </h1>
            <p className="text-white text-center mt-3">
              <Fade left>
                There is no better deliverance from the world than through art.
              </Fade>
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
