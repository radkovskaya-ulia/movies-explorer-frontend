import React from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";

function AuthForm({
  children,
  buttonText,
  title,
  link,
  linkText,
  authText,
  handleSubmit,
  errorAuthMessage,
  isDisabled = false,
}) {
  return (
    <>
      <div className="auth">
        <form className="auth__form" onSubmit={handleSubmit}>
          <h2 className="auth__form-title">{title}</h2>
          {children}
          <p
            className={`auth__error
        ${errorAuthMessage ? "" : "auth__error_invisible"}`}
          >
            Что-то пошло не так ...
          </p>
          <button
            type="submit"
            className={`auth__button ${isDisabled && "auth__button_disabled"}`}
            disabled={isDisabled}
          >
            {buttonText}
          </button>
        </form>
        <div className="auth__link-container">
          <p className="auth__text">{authText}</p>
          <Link className="auth__link" to={link}>
            {linkText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
