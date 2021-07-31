import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <p className="footer__name-project">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container">
          <div className="footer__link-container">
            <a
              className="footer__link"
              href="https://praktikum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__link"
              href="https://github.com/radkovskaya-ulia"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="footer__link"
              href="https://www.facebook.com/julia.radkovskaya"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <p className="footer__copyright">&copy;2021</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
