import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({
  onNavigationClick,
  numCards,
  cards,
  handleShowMoreCards,
  onSearch,
  showPreloader,
  infoMoviesMessage,
  errorMoviesMessage,
  isLogin,
  onLikeClick,
  savedCards,
  seachInputError,
}) {


  return (
    <>
      <Header onNavigationClick={onNavigationClick} isLogin={isLogin} />
      <div className="movies">
        <SearchForm
          onSearch={onSearch}
          seachInputError={seachInputError}
        />
        <Preloader showPreloader={showPreloader} />
        <p
          className={`movies__movies-message
        ${infoMoviesMessage ? "" : "movies__movies-message_invisible"}`}
        >
          Ничего не найдено
        </p>
        <p
          className={`movies__movies-message
        ${errorMoviesMessage ? "" : "movies__movies-message_invisible"}`}
        >
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
        <MoviesCardList
          cards={cards}
          savedCards={savedCards}
          numCards={numCards}
          handleShowMoreCards={handleShowMoreCards}
          onLikeClick={onLikeClick}
        />
      </div>
      <Footer />
    </>
  );
}

export default Movies;
