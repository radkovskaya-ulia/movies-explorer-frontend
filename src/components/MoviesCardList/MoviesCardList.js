import React from "react";
import "./MoviesCardList.css";
import { initialCards } from "../../utils/initialCards";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="card-list">
      <ul className="card__item-list">
        {[...initialCards].map((card) => (
          <MoviesCard key={card.id} card={card}></MoviesCard>
        ))}
      </ul>
      <button type="button" className="card__more-button">Еще</button>
    </section>
  );
}

export default MoviesCardList;
