import React from "react";
import "./Experience.css";
import { GoVerified } from "react-icons/go";
const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais habilidades eu tenho</h5>
      <h2>Minha experiência</h2>
      <div className="container container_experiencia">
        <div className="cards_experiencia">
          <article className="card_experiencia">
            <h5> Habilidades de Frontend</h5>
            <div className="card_experience">
              <div>
                <h2>
                  <GoVerified className="experience_icon" />
                  HTML
                </h2>
                <small>Avançado</small>
              </div>
              <div>
                <h2>
                  <GoVerified className="experience_icon" />
                  CSS
                </h2>
                <small>Avançado</small>
              </div>
              <div>
                <h2>
                  <GoVerified className="experience_icon" />
                  JavaScript
                </h2>
                <small>Intermediário</small>
              </div>
              <div>
                <h2>
                  <GoVerified className="experience_icon" />
                  React
                </h2>
                <small>Intermediário</small>
              </div>
            </div>
          </article>
          <article className="card_experiencia">
            <h5> Habilidades de Backend</h5>
            <div className="card_experience">
              <div>
                <h2>
                  <GoVerified className="experience_icon" />
                  Node JS
                </h2>
                <small>Intermediário</small>
              </div>
              <div>
                <h2>
                  <GoVerified className="experience_icon" />
                  MySQL
                </h2>
                <small>Básico</small>
              </div>
              <div>
                <h2>
                  <GoVerified className="experience_icon" />
                  TypeScript
                </h2>
                <small>Intermediário</small>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
