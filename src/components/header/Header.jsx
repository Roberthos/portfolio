import React from "react";
import "./Header.css";
import CVD from "./CVD";
import progi from "../../assets/progi.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <HeaderSocials />
      <div className=" container header_containerx">
        <div className="container header_container">
          <h5>Oi, eu sou o</h5>
          <h1>Roberth Oliveira</h1>
          <h5>Desenvolvedor Fullstack</h5>
          <h5 className="text-light">
            Sou graduando em engenharia de controle e automação e amante do
            desenvolvimento.
          </h5>
          <h5 className="text-light">
            Tenho experiência em React, Node.js, JavaScript, HTML, CSS,
            TypeScript e MySQL.
          </h5>
          <CVD />
        </div>
        <div className=" header_containerx">
          <img src={progi} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
