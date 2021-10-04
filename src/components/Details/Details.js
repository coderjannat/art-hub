import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Details.css";
import Image from 'react-bootstrap/Image'



import { Link } from "react-router-dom";

const Details = () => {



  const [moreService, setmoreService] = useState([]);


  useEffect(() => {

    fetch('/moreServiceData.json')
      .then((res) => res.json())

      .then((data) => setmoreService(data));
  }, []);
  return (
    <div>
      <MenuBar />
      <div className="pt-5 pb-3 all-team">
        <h1>Our Services</h1>
      </div>
      <div >
        {moreService?.map((ms) => (
        <div className=" container d-flex pt-4">
            <div >
           <Image src={ms.image} className="img" fluid />
            </div>
            <div className="text-start ps-4">
              <h3 className="">{ms.name}</h3>
              <p>{ms.description} </p>
              </div>
          </div>
          ))}

      </div>
      <Footer />
    </div>
  );
};

export default Details;
