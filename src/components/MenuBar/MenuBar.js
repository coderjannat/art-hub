import React, { useContext } from "react";
import "./MenuBar.css";

import { Link } from "react-router-dom";
import { userContext } from "./../../App";

const MenuBar = () => {
  const [user, setUser] = useContext(userContext);
  console.log(user);
  return (
    <div className="MenuBar-container pt-2 mt-2">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              
              <h2  className="w-75 fw-bold text-white">Art Hub</h2>
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/details/:teamId" className="items">
                  <li>Services</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
                <Link to="/contact" className="items">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
