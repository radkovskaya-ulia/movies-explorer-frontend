import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ onNavigationClick, width }) {
  return (
    <>
      <Header onNavigationClick={onNavigationClick} width={width} />
      <div className="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
