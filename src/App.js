import React, { useContext } from "react";
import Navigation from "./components/navigation/Navigation";
import Introduction from "./components/introduction/Introduction";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { themeContext } from "./context/Context";
import "./App.css";

const App = () => {
  const {state} = useContext(themeContext);
  const {darkMode} = state;
  return (
      <div
        className="App"
        style={{
          backgroundColor: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Navigation />
        <Introduction />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </div>
  );
};

export default App;
