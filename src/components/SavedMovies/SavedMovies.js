import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  onNavigationClick,
  width,
  cards,
  onSearch,
  isLogin,
  showPreloader,
  infoMoviesMessage,
  numCards,
  handleShowMoreCards,
  onLikeClick,
  errorMoviesMessage,
  savedCards,
  showSavedCardList
}) 
{

  return (
    <>
      <Header
        onNavigationClick={onNavigationClick}
        width={width}
        isLogin={isLogin}
      />
      <div className="saved-movies">
        <SearchForm onSearch={onSearch} />
        <Preloader showPreloader={showPreloader}  />
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
          numCards={numCards}
          handleShowMoreCards={handleShowMoreCards}
          onLikeClick={onLikeClick}
          savedCards={savedCards}
          showSavedCardList={showSavedCardList}
        />
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
