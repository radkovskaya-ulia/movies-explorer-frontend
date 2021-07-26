import React from "react";
import "./Portfolio.css";
import row from "../../images/row.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__container">
          <a
            className="portfolio__link"
            href="https://radkovskaya-ulia.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <img
            className="portfolio__image"
            src={row}
            alt="Изображение стрелки."
          />
        </div>
        <div className="portfolio__container">
          <a
            className="portfolio__link"
            href="https://radkovskaya-ulia.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <img
            className="portfolio__image"
            src={row}
            alt="Изображение стрелки."
          />
        </div>
        <div className="portfolio__container">
          <a
            className="portfolio__link"
            href="http://radkovskaya-mesto.nomoredomains.club/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <img
            className="portfolio__image"
            src={row}
            alt="Изображение стрелки."
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
