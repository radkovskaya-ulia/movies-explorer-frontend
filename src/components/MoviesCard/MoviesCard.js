import React from "react";
import "./MoviesCard.css";
import { useRouteMatch } from "react-router-dom";

function MoviesCard({ card }) {
  const isMovies = useRouteMatch({ path: "/movies", exact: true });
  const [isLiked, setIsLiked] = React.useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  const cardLikeButtonClassName = `card__like-button
  ${isMovies ? "" : "card__like-button_delete"}
  ${isLiked ? "card__like-button_active" : ""}`;

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.image}
        alt={`Картинка фильма "${card.nameRu}".`}
      />
      <div className="card__container">
        <h2 className="card__title">{card.nameRu}</h2>
        <button
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
      </div>
      <p className="card__duration">
        {parseInt(card.duration / 60)}ч {card.duration % 60}м
      </p>
    </li>
  );
}

export default MoviesCard;
