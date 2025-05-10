import React from "react";
import { motion } from "framer-motion";
import UseTypewriter from "./UseTypewriter";

function Home() {
  let dev = "Neelamber Mishra";
  const typedText = UseTypewriter([" web-developer", " app-developer"]);

  return (
    <div className="home" id="home">
      <h1>
        {"<>"}
        <br />
        <span className="typed-container">
          <span className="typed">{typedText}</span>
        </span>
        <br />
        {"</>"}
      </h1>
      <p className="links">
        say hallo <i className="fas fa-coffee"></i>
      </p>
      <p className="intro">
        Hello I am {dev}, a computer science student at the Indian Institute of
        Technology (Dhanbad). Current fields of study include machine learning,
        full-stack web development, competitive coding and quant.
      </p>
      <a href="#contact">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="contact-button"
        >
          Contact
        </motion.button>
      </a>
    </div>
  );
}

export default Home;
