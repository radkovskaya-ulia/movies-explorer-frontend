import React from "react";
import "./Login.css";
import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";

function Login() {
  return (
    <div className="login">
      <Logo />
      <AuthForm
        buttonText="Войти"
        title="Рады видеть"
        link="/signup"
        linkText="Регистрация"
        authText="Еще не зарегистрированы?"
      >
        <label htmlFor="email" className="auth__form-label">
          E-mail
        </label>
        <input
          className="auth__form-input auth__form-input_login"
          id="email"
          required
          name="email"
          type="email"
        />
        <label htmlFor="password" className="auth__form-label">
          Пароль
        </label>
        <input
          className="auth__form-input auth__form-input_login"
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

export default Login;
