import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.svg"; 

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if (window.scrollY >= 100){
      setColor(true);
       }else {
        setColor(false);
          
      }   

  };

  window.addEventListener("scroll", changeColor);
  

  return (
    <div className={color ? "header header-bg": "header"} >
      <Link to="/">
      <img src={logo} alt="Logo" className="logo" />
</Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/project">Uygulamalar</Link>
        </li>
        <li>
          <Link to="/about">Hakkımda</Link>
        </li>
        <li>
          <Link to="/contact">İletişim</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            style={{ color: "#fff" }}
          />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
