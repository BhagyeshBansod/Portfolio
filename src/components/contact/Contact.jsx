import React, { useState, useContext } from "react";
import { themeContext } from "../../context/Context";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {

  const theme = useContext(themeContext);
  const { state } = theme;

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xgrm75f",
        "template_fp614mp",
        formData,
        "RxbDlRLx7E6MiY1pm"
      )
      .then(
        () => {
          alert("Email Sent. Thanks for contacting me!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div className="contact" id="Contact">
      <div className="contact-name">
        <span style={{
            color: state.darkMode ? "white" : "",
          }}>Get in Touch</span>
        <span>Contact Me</span>
      </div>
      <div className="contact-form">
        <form onSubmit={sendEmail}>
          <div className="inputbox col1 row1">
            <input
              className={`${state.darkMode ? "dark-bg" : ''} fields`}
              value={formData.user_name}
              onChange={handleInputChange}
              type="text"
              name="user_name"
              required
            />
            <span className={`${state.darkMode ? "dark-bg" : ''}`}>Full Name</span>
          </div>

          <div className="inputbox col1 row2">
            <input
              className={`${state.darkMode ? "dark-bg" : ''} fields`}
              value={formData.user_email}
              onChange={handleInputChange}
              type="email"
              name="user_email"
              required
            />
            <span className={`${state.darkMode ? "dark-bg" : ''}`}>Email ID</span>
          </div>

          <div className="inputbox col2 row2">
            <textarea
              rows={4}
              className={`${state.darkMode ? "dark-bg" : ''} fields`}
              value={formData.message}
              onChange={handleInputChange}
              type="textarea"
              name="message"
              required
            />
            <span className={`${state.darkMode ? "dark-bg" : ''}`}>Message</span>
          </div>
          <button type="submit" className="button intro-hire contact-btn">
            Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
