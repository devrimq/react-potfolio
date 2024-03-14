import "./HeroImgStyles.css";
import React from "react";
import introImg from "../assets/intro-bg.png"; 
import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-img"
          src={introImg} 
          alt="introImg"  />
      </div>
      <div className="content"> 
      <p> hoşgeldİnİz </p>
      <h1>Dr Ayşe Derya Sarıkaya</h1> 
      <div><Link to="/project" className="btn">uygulamalar</Link>
      <Link to="/contact" className="btn">İletİşİm</Link></div>     
      </div>
     

    </div>
  );
};

export default HeroImg;
