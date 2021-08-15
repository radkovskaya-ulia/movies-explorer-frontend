import React from "react";
import "./Login.css";
import AuthForm from "../AuthForm/AuthForm";
import Logo from "../Logo/Logo";
import { useFormWithValidation } from "../../hooks/useFormValidation";

function Login({ onLogin, errorAuthMessage }) {
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  React.useEffect(() => {
    resetFrom({});
  }, [resetFrom]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <div className="login">
      <Logo />
      <AuthForm
        buttonText="Войти"
        title="Рады видеть"
        link="/signup"
        linkText="Регистрация"
        authText="Еще не зарегистрированы?"
        handleSubmit={handleSubmit}
        errorAuthMessage={errorAuthMessage}
        isDisabled={!isValid}
      >
        <label
          htmlFor="email"
          className="auth__form-label auth__form-label_login"
        >
          E-mail
          <input
            className="auth__form-input auth__form-input_login "
            id="email"
            required
            name="email"
            type="email"
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="auth__error" id="email-error">
            {errors.email || ""}
          </span>
        </label>
        <label
          htmlFor="password"
          className="auth__form-label auth__form-label_login"
        >
          Пароль
          <input
            className="auth__form-input auth__form-input_login"
            id="password"
            required
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className="auth__error" id="password-error">
            {errors.password || ""}
          </span>
        </label>
      </AuthForm>
    </div>
  );
}

export default Login;
