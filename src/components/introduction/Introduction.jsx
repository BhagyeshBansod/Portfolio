import React, { useContext } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { themeContext } from "../../context/Context";
import TypewriterEffect from "../typewritereffect/TypewriterEffect";
import linkedIn from "../../img/linkedin.png";
import github from "../../img/github.png";
import profile from "../../img/Mypic.png";
import Resume from "./Bhagyesh_Bansod.pdf";
import "./Introduction.css";

const Introduction = () => {
  const theme = useContext(themeContext);
  const { state } = theme;

  const titleAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adjust the delay between children animations
      },
    },
  };
  const titleAnimationChildren = {
    hidden: {
      opacity: 0,
      y: -50, // Start from above (negative y-value) for dropping effect0
    },
    show: {
      opacity: 1,
      y: 0, // Move to the final position (y = 0)
      transition: {
        type: "spring", // Use a spring animation for a more realistic dropping effect
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const buttonAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    show: {
      clipPath: "polygon(0 0, 300% 0, 100% 300%, -100% 300%)",
      transition: {
        delay: 4,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const imageAnimation = {
    hidden: {
      opacity: 0,      
    },
    show: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 0.35
      },
    },
  };

  return (
    <>
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span style={{ color: state.darkMode ? "white" : "" }}>Hi! I am</span>

          <motion.span
            variants={titleAnimation}
            initial="hidden"
            animate="show"
          >
            {Array.from("Bhagyesh Bansod").map((letter, idx) => (
              <motion.span
                key={idx}
                variants={titleAnimationChildren}
                className="span-motion"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>

          <motion.span
            variants={buttonAnimation}
            initial="hidden"
            animate="show"
            style={{ color: state.darkMode ? "white" : "" }}
          >
            I am into <TypewriterEffect />
          </motion.span>

          <div className="btn">
            <Link to="Contact" spy={true} smooth={true}>
              <motion.button
                variants={buttonAnimation}
                initial="hidden"
                animate="show"
                className="button intro-hire"
              >
                Hire me
              </motion.button>
            </Link>
            <a href={Resume} download>
              <motion.button
                variants={buttonAnimation}
                initial="hidden"
                animate="show"
                className="button intro-hire btn-cv"
              >
                Download CV
              </motion.button>
            </a>
          </div>
          <div className="intro-icons">
            <a
              href="https://www.linkedin.com/in/bhagyesh-bansod-90980a1b4/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                variants={buttonAnimation}
                initial="hidden"
                animate="show"
                src={linkedIn}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/BhagyeshBansod"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                variants={buttonAnimation}
                initial="hidden"
                animate="show"
                src={github}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <motion.img
          variants={imageAnimation}
          initial="hidden"
          animate="show"
          src={profile}
          alt="Profile"
        />
      </div>
    </div>
    <span className="bottom"> </span>
    </>
  );
};

export default Introduction;
