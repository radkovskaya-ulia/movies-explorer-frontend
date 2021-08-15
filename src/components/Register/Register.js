import React, { useState } from "react";
import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import { useFormWithValidation } from "../../hooks/useFormValidation";

function Register({ onRegister, errorAuthMessage }) {
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  React.useEffect(() => {
    resetFrom({});
  }, [resetFrom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <div className="register">
      <Logo />
      <AuthForm
        buttonText="Зарегистрироваться"
        title="Добро пожаловать!"
        link="/signin"
        linkText="Войти"
        authText="Уже зарегистрированы?"
        handleSubmit={handleSubmit}
        isDisabled={!isValid}
        errorAuthMessage={errorAuthMessage}
      >
        <label htmlFor="name" className="auth__form-label auth__form-label_register">
          Имя
          <input
            className="auth__form-input auth__form-input_register"
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
          <span className="auth__error" id="name-error">
            {errors.name || ""}
          </span>
        </label>

        <label htmlFor="email" className="auth__form-label auth__form-label_register">
          E-mail
          <input
            className="auth__form-input auth__form-input_register"
            id="email"
            required
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email || ""}
          />
          <span className="auth__error" id="email-error">
            {errors.email || ""}
          </span>
        </label>

        <label htmlFor="password" className="auth__form-label auth__form-label_register">
          Пароль
          <input
            className="auth__form-input auth__form-input_register"
            id="password"
            required
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={values.password || ""}
          />
          <span className="auth__error" id="password-error">
            {errors.password || ""}
          </span>
        </label>
      </AuthForm>
    </div>
  );
}

export default Register;
