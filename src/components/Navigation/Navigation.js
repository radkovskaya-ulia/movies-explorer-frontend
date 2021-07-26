import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isOpen, onClose }) {
  const openClass = isOpen && "navigation_visible";

  return (
    <div className={`navigation ${openClass}`}>
      <div className="navigation__content">
        <button
          type="button"
          onClick={onClose}
          className="navigation__close-button"
          aria-label="Кнопка закрытия меню навигации."
        ></button>
        <div className="navigation__link-container">
          <NavLink activeClassName="navigation__link_active" className="navigation__link" exact to="/">
            Главная
          </NavLink>
          <NavLink activeClassName="navigation__link_active" className="navigation__link" to="/movies">
            Фильмы
          </NavLink>
          <NavLink activeClassName="navigation__link_active" className="navigation__link" to="/saved-movies">
            Сохраненные фильмы
          </NavLink>
        </div>
        <NavLink className="navigation__link-account" to="/profile"></NavLink>
      </div>
    </div>
  );
}

export default Navigation;
