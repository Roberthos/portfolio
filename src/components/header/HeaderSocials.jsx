import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com/in/robertholiveira">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Roberthos">
        <BsGithub />
      </a>
      <a href="https://instagram.com/roberth_os">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
