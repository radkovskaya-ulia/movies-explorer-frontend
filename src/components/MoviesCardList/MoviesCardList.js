import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useRouteMatch } from "react-router-dom";

function MoviesCardList({
  cards,
  numCards,
  handleShowMoreCards,
  onLikeClick,
  savedCards
}) {
  const downloadAllCard = cards.length <= numCards;
  const isMovies = useRouteMatch({ path: "/movies", exact: true });


  return (
    <section className="card-list">
      <ul className="card__item-list">
        {[...cards]
          .filter((card, num) => num < numCards)
          .map((filterCard) => (
            <MoviesCard
              key={`${isMovies ? filterCard.id : filterCard._id}`}
              card={filterCard}
              onLikeClick={onLikeClick}
              savedCards={savedCards}
            ></MoviesCard>
          ))}
      </ul>
      <button
        type="button"
        className={`card__more-button
        ${downloadAllCard ? "card__more-button-invisible" : ""}`}
        onClick={handleShowMoreCards}
      >
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
