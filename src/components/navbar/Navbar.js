import React, { useState, useRef } from "react";
import { Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./Navbar.css";
import ButtonRegester from "../glopal/ButtonRegester";
import ButtonLogin from "../glopal/ButtonLogin";

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
            <h1>CriptoCash</h1>
            </a>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
            
            <a onClick={boxHandler} href="#Home"   >
              Home
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href='#About' >
              About us
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Services">
              Services
            </a>
          </li>
          <li>
            <a onClick={boxHandler}  href="#Contact">
              Contact
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Portfolio">
              Portfolio
            </a>
          </li>
          <li>
          <ButtonLogin titleLogin="Log in" onClick={boxHandler}/>
          </li>
          <li>
            
            <ButtonRegester title="Register" onClick={boxHandler} />
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