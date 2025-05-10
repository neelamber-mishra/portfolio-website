import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

function About() {
  const [dev, setDev] = useState("Neelamber Mishra");
  const [intro, setIntro] = useState(
    "Hello I am Neelamber Mishra, a computer science student at the Indian Institute of Technology (Dhanbad). Current fields of study include machine learning, full-stack web development, competitive coding and quant."
  );

  return (
    <>
      <motion.div className="about">
        <h1>About Me</h1>
        <p className="links">
          say hello <i className="fas fa-coffee"></i>
        </p>
        <p className="intro">{intro}</p>

        
    </>
  );
}
export default About;
