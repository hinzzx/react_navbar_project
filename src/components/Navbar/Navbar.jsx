import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Fade } from "react-reveal";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <>
      <nav className="navbar d-flex-center">
        <h2 className="white-text logo">
          {" "}
          <a href="http://localhost:3000/">Logo</a>
        </h2>
        <ul className="d-flex-center row w-45">
          <li className="white-text underline m-r-1rem">
            <Link to="/home">Home</Link>
          </li>

          <li className="white-text underline m-r-1rem">
            <Link to="/about">About</Link>
          </li>
          <li className="white-text underline m-r-1rem">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="white-text underline m-r-1rem">
            <Link to="/Help">Help</Link>
          </li>
        </ul>
        <input
          type="text"
          placeholder="any text"
          className="input-text"
        ></input>

        {/* create icon with classname menuIcon and onClick to show div */}

        <AiOutlineMenu
          className="menuIcon"
          onClick={() => setIsVisible(!isVisible)}
        />
      </nav>
      {isVisible && (
        <Fade>
          <div
            
            className="menu"
          >
            <ul className="d-flex-center column">
              <li
                className="white-text underline m-r-1rem"
                onClick={() => setIsVisible(!isVisible)}
              >
                <Link to="/home">Home</Link>
              </li>
              <li
                className="white-text underline m-r-1rem"
                onClick={() => setIsVisible(!isVisible)}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className="white-text underline m-r-1rem"
                onClick={() => setIsVisible(!isVisible)}
              >
                <Link to="/contacts">Contacts</Link>
              </li>
              <li
                className="white-text underline m-r-1rem"
                onClick={() => setIsVisible(!isVisible)}
              >
                <Link to="/Help">Help</Link>
              </li>{" "}
            </ul>
          </div>
          </Fade>
        
      )}
    </>
  );
};

export default Navbar;
