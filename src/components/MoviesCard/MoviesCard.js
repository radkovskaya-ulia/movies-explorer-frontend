import React from "react";
import "./MoviesCard.css";

function MoviesCard({ card }) {
  return (
    <li className="card">
      <img className="card__image" src={card.image} alt={card.nameRU} />
      <div className="card__container">
        <h2 className="card__title">{card.nameRu}</h2>
        <button type="button" className="card__like-button"></button>
      </div>
      <p className="card__duration">
        {parseInt(card.duration / 60)}ч {card.duration % 60}м
      </p>
    </li>
  );
}

export default MoviesCard;
