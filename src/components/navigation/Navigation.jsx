import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { themeContext } from "../../context/Context";
import ToggleButton from "../toggleButton/ToggleButton";

import "./Navigation.css";

const Navigation = () => {
  const theme = useContext(themeContext);
  const { state } = theme;
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const navbarAnimation = {
    hidden:{
      y:-100,
    },
    show:{
      y:0,
      transition:{
        delay:4,
        duration:0.5
      }
    }
  }

  return (
    <motion.div className="nav-wrapper" id="Navigation" variants={navbarAnimation} initial="hidden" animate="show">
      <div className="nav-left">
        <div
          className="nav-name"
          style={{
            color: state.darkMode ? "white" : "",
          }}
        >
          Prologue
        </div>
        <ToggleButton />
      </div>
      <div className={`nav-right ${showNav ? "show-nav" : ""}`}>
      <div
          className="nav-hamburger"
          onClick={toggleNav}
          style={{ color: state.darkMode ? "white" : "" }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          style={{
            color: state.darkMode ? "white" : "",
          }}
        >
          <Link to="Navigation" spy={true} smooth={true} activeClass="activeClass">
          <li> Home </li>
          </Link>
          <Link to="Experience" spy={true} smooth={true}>
          <li> Expertise </li>
          </Link>
          <Link to="Portfolio" spy={true} smooth={true}>
          <li> Portfolio </li>
          </Link>
          <Link to="Services" spy={true} smooth={true}>
          <li> Services </li>
          </Link>
          <Link to="Contact" spy={true} smooth={true}>
          <li> Contact </li>
          </Link>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navigation;
