import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import "../App.scss";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/radev-krishna-151502228">
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a href=" https://x.com/Radev_krishna?t=2sRucKpGrb0w85fNBXJ6Mg&s=08 ">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/radev_krishna_mr/profilecard/?igsh=djZjYzJpZzVlZGo2">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
