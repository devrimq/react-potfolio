import "./FooterStyles.css";
import React from "react";
import {FaMapMarkedAlt, FaHome,FaMailBulk,FaPhone} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
  <div className="footer-container">
    <div className="left"> 
    <div className="location">
  <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 
  Cuma Sokak No:21/4 Tepebaşı / Keçiören
</div>

      <div className="phone">
        <h4>
          <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          +90 312 314 14 55
          
        </h4>
      </div>
      <div className="email">
        <h4>
          <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          devrimq@gmail.com
        </h4>
      </div>
    </div>
    <div className="right">
      <p>Web Design Devrim</p>
      <div className="social">
      <h4>
        <FaMapMarkedAlt size={30} style={{ color: "#fff", marginRight: "2rem" }} />
      harita ekle
      </h4>
    </div>
    </div>
    
  </div>
</div>

  );
}

export default Footer;