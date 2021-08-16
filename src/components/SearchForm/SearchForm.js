import React from "react";
import "./SearchForm.css";
import magnifier from "../../images/magnifier.svg";
import { useLocation } from "react-router-dom";

function SearchForm({ onSearch, seachInputError }) {
  const [checked, setChecked] = React.useState('');
  const [phrase, setPhrase] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      if (
        localStorage.getItem("searchMoviesPhrase") !== null &&
        localStorage.getItem("searchMoviesCheck") !== null
      ) {
        setPhrase(localStorage.getItem("searchMoviesPhrase"));
        if (localStorage.getItem("searchMoviesCheck") === "true") {
          setChecked(true);
        } else if (localStorage.getItem("searchMoviesCheck") === "false")
          setChecked(false);
      }
    } else {
      if (
        localStorage.getItem("searchSavedMoviesPhrase") !== null &&
        localStorage.getItem("searchSavedMoviesCheck") !== null
      ) {
        setPhrase(localStorage.getItem("searchSavedMoviesPhrase"));
        if (localStorage.getItem("searchSavedMoviesCheck") === "true") {
          setChecked(true);
        } else if (localStorage.getItem("searchSavedMoviesCheck") === "false")
          setChecked(false);
      }
    }
  }, [location]);

  function handleChange(e) {
    setChecked(!checked);
  }
  function handleChangePhrase(e) {
    setPhrase(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    onSearch({
      phrase: phrase,
      check: checked,
    });
  }

  return (
    <section className="searchform">
      <form className="searchform__form" onSubmit={handleSumbit}>
        <div className="searchform__container">
          <div className="searchform__input-container">
            <img
              className="searchform__search-image"
              src={magnifier}
              alt="Иконка лупы."
            />
            <input
              type="text"
              name="filmname"
              className="searchform__input"
              placeholder="Фильм"
              value={phrase || ""}
              onChange={handleChangePhrase}
            />
          </div>
          <button type="submit" className="searchform__button"></button>
        </div>
        <label className="searchform__label">
          <input
            type="checkbox"
            className="searchform__invisible-checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <span className="searchform__visible-checkbox"></span>
          <span className="form__label-text">Короткометражки</span>
        </label>
      </form>
      <p
        className={`searchform__input-error ${
          seachInputError ? "" : "searchform__input-error_invisible"
        }`}
      >
        Нужно ввести ключевое слово
      </p>
    </section>
  );
}

export default SearchForm;
