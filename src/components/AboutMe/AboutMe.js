import React from "react";
import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import photo from "../../images/author.jpg";

function AboutMe() {
  return (
    <section className="author">
      <div className="author__content">
        <SectionTitle title={"Студент"} />
        <div className="author__main-container">
          <img className="author__photo" src={photo} alt="Фотография автора." />
          <div className="author__container">
            <div className="author__text-container">
              <p className="author__name">Юля</p>
              <p className="author__bio">Фронтенд-разработчик, 30 лет</p>
              <p className="author__text">
                Я родилась и живу в Москве, закончила факультет прикладной
                математики института электроники и математики(МГИЭМ). У меня
                есть муж и маленький сын. Я люблю решать загадки, кататься на
                сноуборде и плавать. Все время работала в IT (поддержка,
                внедренее, аналитика). В прошлом году ушла в декрет, открыла для
                себя Фронтенд разработку и влюбилась. Планирую далее развиваться
                именно в этом направлении.
              </p>
            </div>
            <div className="author__link-container">
              <a
                className="author__link"
                href="https://www.facebook.com/julia.radkovskaya"
              >
                Facebook
              </a>
              <a
                className="author__link"
                href="https://github.com/radkovskaya-ulia"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
