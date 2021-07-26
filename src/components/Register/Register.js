import React from "react";
import "./Register.css";
import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";

function Register() {
  return (
    <div className="register">
      <Logo />
      <AuthForm
        buttonText="Зарегистрироваться"
        title="Добро пожаловать!"
        link="/signin"
        linkText="Войти"
        authText="Уже зарегистрированы?"
      >
        <label htmlFor="name" className="auth__form-label">
          Имя
        </label>
        <input
          className="auth__form-input auth__form-input_register"
          id="name"
          required
          name="name"
          type="text"
        />
        <label htmlFor="email" className="auth__form-label">
          E-mail
        </label>
        <input
          className="auth__form-input auth__form-input_register"
          id="email"
          required
          name="email"
          type="email"
        />
        <label htmlFor="password" className="auth__form-label">
          Пароль
        </label>
        <input
          className="auth__form-input auth__form-input_register"
          id="password"
          required
          name="password"
          type="password"
          autoComplete="current-password"
        />
      </AuthForm>
    </div>
  );
}

export default Register;
