import React from "react";
import "./Techs.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function Tech() {
  return (
    <section className="techs">
      <div className="techs__content">
        <SectionTitle title={"Технологии"} />
        <div className="techs__container">
          <p className="techs__subtitle">7 технологий</p>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__item-list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">MongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Tech;
