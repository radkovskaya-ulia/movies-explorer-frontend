import React from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";

function AuthForm({ children, buttonText, title, link, linkText, authText }) {
  return (
    <>
      <div className="auth">
        <form className="auth__form">
          <h2 className="auth__form-title">{title}</h2>
          {children}
          <button type="submit" className="auth__button">
            {buttonText}
          </button>
        </form>
        <div className="auth__link-container">
          <p className="auth__text">{authText}</p>
          <Link className="auth__link" to={link}>{linkText}</Link>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
