import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__container">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <Link className="notfound__link" to="/">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
