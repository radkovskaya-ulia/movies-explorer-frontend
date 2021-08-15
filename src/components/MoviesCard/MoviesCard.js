import React from "react";
import "./MoviesCard.css";
import { useRouteMatch } from "react-router-dom";

function MoviesCard({ card, onLikeClick, savedCards }) {
  const isMovies = useRouteMatch({ path: "/movies", exact: true });
  const [isLiked, setIsLiked] = React.useState(savedCards.some((i) => i.movieId === card.id));
  
  function handleLikeClick() {
    if (isMovies) {
      setIsLiked(!isLiked);
      onLikeClick(
        {
          country: card.country,
          director: card.director,
          duration: card.duration,
          year: card.year,
          description: card.description,
          image: `https://api.nomoreparties.co${card.image.url}`,
          trailer: card.trailerLink,
          thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
          movieId: card.id,
        },
        isLiked
      );
    }
    else {
      onLikeClick(card)
    }
  }

  const cardLikeButtonClassName = `card__like-button
  ${isMovies ? "" : "card__like-button_delete"}
  ${isLiked ? "card__like-button_active" : ""}`


  return (
    <li className="card">
      <a className="card__image-link" href={card.trailerLink}><img
        className="card__image"
        src={`${
          isMovies
            ? `https://api.nomoreparties.co${card.image.url}`
            : card.image
        } `}
        alt={`Картинка фильма "${card.nameRU}".`}
      /></a>
      <div className="card__container">
        <h2 className="card__title">{card.nameRU}</h2>
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
