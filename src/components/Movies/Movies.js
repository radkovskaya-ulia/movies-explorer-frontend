import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ onNavigationClick, width }) {
  return (
    <>
      <Header onNavigationClick={onNavigationClick} width={width} />
      <div className="movies">
        <SearchForm />
        <MoviesCardList />
      </div>
      <Footer />
    </>
  );
}

export default Movies;
