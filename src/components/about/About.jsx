import React from "react";
import "./About.css";
import me from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { BiPaste } from "react-icons/bi";

const about = () => {
  return (
    <section id="about">
      <h5>Me conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={me} alt="Sobre mim" className="about_me-image " />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experiência</h5>
              <small>2+ anos</small>
            </article>

            <article className="about_card">
              <BiPaste className="about_icon" />
              <h5>Projetos</h5>
              <small>X projetos</small>
            </article>
          </div>
          <p>
            Desenvolvedor FullStack com experiência em aplicações JavaScript.
            Tenho experiência profissional com o desenvolvimento FullStack e me
            aperfeiçoei ao longo dos anos, principalmente no Front-End. Tenho
            experiência em React, Node.js, JavaScript, HTML, CSS, TypeScript e
            MySQL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
