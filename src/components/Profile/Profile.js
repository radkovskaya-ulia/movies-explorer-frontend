import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormValidation";

function Profile({ onNavigationClick, isLogin, onUpdateUser, onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  React.useEffect(() => {
    if (currentUser) {
      resetFrom(currentUser, {}, true);
    }
  }, [currentUser, resetFrom]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  return (
    <>
      <Header onNavigationClick={onNavigationClick} isLogin={isLogin} />
      <div className="profile">
        <form className="profile__form" onSubmit={handleSubmit}>
          <h2 className="profile__form-title">Привет, {values.name}!</h2>
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
              minLength="2"
              maxLength="30"
              pattern="[a-zA-Zа-яА-Я -]{1,}"
              value={values.name || ""}
              onChange={handleChange}
            />
          </div>
          <span className="profile__error" id="name-error">
            {errors.name || ""}
          </span>
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
              value={values.email || ""}
              onChange={handleChange}
            />
          </div>
          
          <span className="profile__error" id="email-error">
            {errors.email || ""}
          </span>
          <button
            type="submit"
            className={`profile__button ${
              !isValid && "profile__button_disabled"
            }`}
            disabled={!isValid}
          >
            Редактировать
          </button>
          <Link className="profile__link" to="/signin" onClick={onLogout}>
            Выйти из аккаунта
          </Link>
        </form>
      </div>
    </>
  );
}

export default Profile;
