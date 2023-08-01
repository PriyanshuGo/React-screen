import React from "react";
import logo from "../Assets/Logo.png";
import st from "../component/head.css";

function Head() {
  return (
    <>
      <div>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="/">
                <img src={logo} width="100px" />
              </a>
            </div>
            <div className="con">
              <p className="content">Home</p>
              <p className="content">About Us</p>
              <p className="content">How it works</p>
              <p className="content">Services</p>
              <p className="content">Contact</p>
            </div>
            <div>
              <button className="btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;



