import React from "react";
import logo_web from "../../images/logo_web.svg";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <img className="promo__image" src={logo_web} alt="Логотип сайта." />
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a className="promo__link" href="#aboutProject">Узнать больше</a>
        </div>
      </div>
    </section>
  );
}

export default Promo;
