import React, { useContext } from "react";
import { themeContext } from "../../context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "./Portfolio.css";
import iNotebook from "../../img/Project1.jpeg";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const { state } = theme;

  const transition = { duration: 8, type: "spring" };

  return (
    <div className="portfolio" id="Portfolio">
      <span
        style={{
          color: state.darkMode ? "white" : "",
        }}
      >
        {" "}
        Recent Project{" "}
      </span>
      <span> Portfolio </span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="project-image">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={transition}
            src={iNotebook}
            alt=""
          />
          <div>
            <div className="project-name" > iNotebook </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
