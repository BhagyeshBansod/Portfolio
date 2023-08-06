import React from "react";
import { Link } from "react-scroll";
import fimage from "../../img/wave.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={fimage} alt="" className="footer-image" />
      <div className="footer-content">
        <span>bhagyeshbansod@outlook.com</span>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/bhagyesh-bansod-90980a1b4/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa-brands fa-linkedin icons fa-2x"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a
            href="https://github.com/BhagyeshBansod"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fa-brands fa-github fa-2x"
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
        <Link
          to="Navigation"
          spy={true}
          smooth={true}
          activeClass="activeClass"
        >
          <p style={{ color: "black", cursor: "pointer" }}>
            Back to Top &#8593;
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
