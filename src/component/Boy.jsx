import React from "react";
import mobile from "../Assets/mobile.jpg";
import apple from "../Assets/apple.png";
import google from "../Assets/google-play.png";
import boss from "./boy.css";

function Boy() {
  return (
    <>
      <div className="body">
        <div>
          <p className="cont">Connecting all your banking needs</p>
          <div>
            <p className="cont1">
              A smart mobile application you can control your business needs
            </p>
          </div>
          <div className="foot">
            <button>
              <img src={apple} className="space" />
              Download App
            </button>
            <button className="btn2">
              <img src={google} className="space" />
              Download App
            </button>
          </div>
        </div>
        <div className="mobile">
          <img src={mobile} width={754} height={502} />
        </div>
      </div>
    </>
  );
}

export default Boy;
