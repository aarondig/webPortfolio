import React from "react";
import Image from "../../Images/DSC04322.jpg";
import "./style.css";

function Landing(props) {
  return (
    <div id="landing">
      <div className="centerWrap">
        <div className="mainImageC">
          {/* <img className="mainImage" src={Image}/> */}
          <div className="mainImgTextC">
            <h2 className="mainImgText">AARON DIGGDON 2020</h2>
            <div className="line"></div>
          </div>
          <div className="mainImage" />
          
        </div>
        <div className="mainTextC">
          <h1 className="mainText">hello!</h1>
          {/* <div className="underline"/> */}
          
        </div>

      </div>
      <div className="mainSubTextC">
      {/* <p className="mainSubText">Scroll to Explore</p> */}
      </div> 
    </div>
  );
}

export default Landing;
