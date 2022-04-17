import React, { useState, useRef } from "react";
import { Container } from '@mui/material';
import logo from"../../assets/logo.png"
import "./Navbar.css";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };
  return ( 
    <div className="main-nav">

    
    <Container maxWidth="lg">
      <nav>
          <div className="logo">
          <a onClick={boxHandler} href="#Home"  >
            <img src={logo} />
            </a>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
            
            <a onClick={boxHandler} href="#Home"  >
              Home
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href='#About' >
              About
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Contact">
            Contact
            </a>
          </li>
          <li>
            <a onClick={boxHandler}  href="#Powerd BY">
            Powerd BY
            </a>
          </li>
          

        </ul>
        <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
          
       
      </nav>
      </Container>
      </div>
  );
};

export default Navbar;