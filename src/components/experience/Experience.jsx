import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {

  return (
    <div className="exp" id="Experience">
      <span>My Expertise</span>
      <div className="exp-circle">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{rotate: 0}}
          transition={{ duration: 5, type: "spring" }} className="exp-maincircle">
          <span className="exp-secCircle"> Frontend Development</span>
          <span className="exp-secCircle"> UI/UX Design</span>
          <span className="exp-secCircle"> Fullstack Development</span>
          <span className="exp-secCircle"> Backend Development</span>
          <span className="exp-secCircle"> Database Management</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
