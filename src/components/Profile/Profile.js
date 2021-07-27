import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile({ onNavigationClick }) {
  return (
    <>
      <Header onNavigationClick={onNavigationClick} />
      <div className="profile">
        <form className="profile__form">
          <h2 className="profile__form-title">Привет, Виталий!</h2>
          <div className="profile__input-container">
            <label htmlFor="name" className="profile__form-label">
              Имя
            </label>
            <input
              className="profile__form-input"
              id="name"
              required
              name="name"
              type="text"
            />
          </div>
          <div className="profile__input-container">
            <label htmlFor="name" className="profile__form-label">
              E-mail
            </label>
            <input
              className="profile__form-input"
              id="email"
              required
              name="email"
              type="email"
            />
          </div>
          <button type="submit" className="profile__button">
            Редактировать
          </button>
          <Link className="profile__link" to="/signin">
            Выйти из аккаунта
          </Link>
        </form>
      </div>
    </>
  );
}

export default Profile;
