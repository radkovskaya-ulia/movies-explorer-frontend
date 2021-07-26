import React from "react";
import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
  return (
    <section className="project" id="aboutProject">
      <div className="project__content">
        <SectionTitle title={"О проекте"} />
        <div className="project__info-container">
          <div className="project__text-container">
            <p className="project__subtitle">
              Дипломный проект включал 5 этапов
            </p>
            <p className="project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="project__text-container">
            <p className="project__subtitle">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="project__block-container">
          <div className="project__block">1 неделя</div>
          <div className="project__block">4 недели</div>
          <div className="project__block-comment">Back-end</div>
          <div className="project__block-comment">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
