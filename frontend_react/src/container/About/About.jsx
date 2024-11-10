import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";

import { images, imeges } from "../../constants";
const abouts = [
  {
    title: "Web Development",
    description: "I am a good web developer",
    imgUrl: images.about01,
  },
  {
    title: "Web Design",
    description: "I am a good web developer",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX",
    description: "I am a good web developer",
    imgUrl: images.about03,
  },
  {
    title: "Web Animation",
    description: "I am a good web developer",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <div>
      <h2 className="head-text">
        I know that <span>Good Design </span>
        <br />
        Means <span>Good Business </span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.discription}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;