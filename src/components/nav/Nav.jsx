import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { TbMessage2 } from "react-icons/tb";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBookBookmark />
        </a>

        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <TbMessage2 />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
