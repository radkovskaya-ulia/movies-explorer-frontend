import React from "react";
import "./SearchForm.css";
import magnifier from "../../images/magnifier.svg";

function SearchForm() {
  const [cheked, setCheked] = React.useState(false);

  function handleChange() {
    setCheked(!cheked);
  }
  return (
    <section className="searchform">
      <form className="searchform__form">
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
              required
            />
          </div>

          <button type="submit" className="searchform__button"></button>
        </div>
        <label className="searchform__label">
          <input
            type="checkbox"
            className="searchform__invisible-checkbox"
            checked={cheked}
            onChange={handleChange}
          />
          <span className="searchform__visible-checkbox"></span>
          <span className="form__label-text">Короткометражки</span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
