import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";

function Header({ onNavigationClick }) {
  const isMain = useRouteMatch({ path: "/", exact: true });

  return (
    <div
      className={`header
      ${isMain ? "header_green" : ""}`}
    >
      <div className="header__content">
        <Logo />
        <div
          className={`header__login-container
        ${isMain ? "" : "header__invisible"}`}
        >
          <Link className="header__link_registration" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link-login" to="/signin">
            Войти
          </Link>
        </div>
        <div
          className={`header__movie-container
          ${isMain ? "header__invisible" : ""}`}
        >
          <Link className="header__link-movie" to="/movies">
            Фильмы
          </Link>
          <Link className="header__link-movie" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </div>
        <Link
          className={`header__link-account
          ${isMain ? "header__invisible" : ""}`}
          to="/profile"
        ></Link>
        <button
          className={`header__menu-button
          ${isMain ? "header__invisible" : ""}`}
          onClick={onNavigationClick}
        ></button>
      </div>
    </div>
  );
}

export default Header;
