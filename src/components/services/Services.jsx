import React, { useContext } from "react";
import { themeContext } from "../../context/Context";
import "./Services.css";

const Services = () => {

  const theme = useContext(themeContext);
  const { state } = theme;

  return (
    <div className="services" id="Services">
      <span>My Services</span>
      <span style={{
            color: state.darkMode ? "white" : "",
          }}>
        {" "}
        As a full-stack developer, I offer a range of services aimed at helping
        businesses and individuals bring their ideas to life through innovative
        and robust web applications. With expertise in both front-end and
        back-end development, I strive to create seamless and user-friendly
        experiences that meet the unique needs of each project.
      </span>
      <div className="card-wrapper">
        <div className="card">
          <i className="fa-solid fa-code card-logo"/> 
          <br />
          <span>Custom Web Application Development</span>
          <div className="card-description">
            <p style={{
            color: state.darkMode ? "white" : "",
          }}>
              I excel in developing custom web applications from scratch, taking
              care of both the front-end and back-end aspects. By leveraging a
              combination of HTML, CSS, and JavaScript frameworks on the
              front-end, and server-side languages and frameworks such as
              Node.js, Java. I create powerful and tailor-made solutions that
              align with your specific needs.
            </p>
          </div>
        </div>
        <div className="card">
        <i className="fa-solid fa-paintbrush card-logo"></i>
          <br />
          <span>Responsive and Intuitive User Interfaces</span>
          <div className="card-description">
            <p style={{
            color: state.darkMode ? "white" : "",
          }}>
            I specialize in crafting user-friendly interfaces that provide an exceptional user experience across various devices and screen sizes. By utilizing modern front-end frameworks like React, Angular, or Vue.js, I ensure your application is visually appealing, highly interactive, and optimized for performance.
            </p>
          </div>
        </div>
        <div className="card">
        <i className="fa-solid fa-database card-logo"/>
          <br />
          <span>Database Design and Management</span>
          <div className="card-description">
            <p style={{
            color: state.darkMode ? "white" : "",
          }}>
            Efficient data management is vital for any application's success. As a full-stack developer, I have expertise in designing and implementing databases using SQL and NoSQL technologies. From creating logical data models to optimizing database performance, I ensure that your application's data is stored, retrieved, and managed effectively
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
