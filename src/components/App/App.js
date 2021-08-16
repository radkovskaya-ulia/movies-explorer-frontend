import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { moviesApi } from "../../utils/MoviesApi";
import { api } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";

function App() {
  const [isNagitionOpen, setIsNagitionOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsisInfoTooltipOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [savedFilteredCards, setSavedFilteredCards] = React.useState([]);
  const [width, setWidth] = React.useState(0);
  const [numCards, setNumCards] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [infoMoviesMessage, setInfoMoviesMessage] = React.useState(false);
  const [infoSavedMoviesMessage, setInfoSavedMoviesMessage] =
    React.useState(false);
  const [errorMoviesMessage, setErrorMoviesMessage] = React.useState(false);
  const [errorAuthMessage, setErrorAuthMessage] = React.useState(false);
  const [seachInputError, setSeachInputError] = React.useState(false);
  const [currentUser, setСurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [infoEditProfileMessage, setInfoProfileMessage] = React.useState("");
  const [isOpenProfileMessage, setOpenProfileMessage] = React.useState(false);
  const history = useHistory();

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    auth
      .getContent(jwt)
      .then((data) => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      const promises = [api.getUserInfo(), api.getCards()];
      Promise.all(promises)
        .then(([userData, cards]) => {
          setСurrentUser(userData.data);
          setLoggedIn(true);
          setSavedCards(
            cards.data.filter((card) => card.owner === userData.data._id)
          );
          if (
            localStorage.getItem("searchMoviesPhrase") !== null &&
            localStorage.getItem("searchMoviesCheck") !== null
          ) {
            handleSearchMovies({
              phrase: localStorage.getItem("searchMoviesPhrase"),
              check: localStorage.getItem("searchMoviesCheck"),
            });
          }
          if (
            localStorage.getItem("searchSavedMoviesPhrase") !== null &&
            localStorage.getItem("searchSavedMoviesCheck") !== null
          ) {
            handleSearchSavedMovies({
              phrase: localStorage.getItem("searchSavedMoviesPhrase"),
              check: localStorage.getItem("searchSavedMoviesCheck"),
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
  }, [loggedIn, history]);

  // Авторизация
  const onLogin = (data) => {
    setErrorAuthMessage(false);
    return auth
      .authorize(data)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorAuthMessage(true);
      });
  };

  // Регистрация
  const onRegister = (data) => {
    setErrorAuthMessage(false);
    return auth
      .register(data)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        setErrorAuthMessage(true);
      });
  };

  // Выход из учетной записи
  const onLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchMoviesPhrase");
    localStorage.removeItem("searchMoviesCheck");
    localStorage.removeItem("searchSavedMoviesPhrase");
    localStorage.removeItem("searchSavedMoviesCheck");
    setCards([]);
    setSavedFilteredCards([]);
    history.push("/signin");
  };

  // Обновление профиля
  function handleUpdateUser(data) {
    setInfoProfileMessage("");
    api
      .editProfile({ name: data.name, email: data.email })
      .then((data) => {
        setСurrentUser(data.data);
        setIsisInfoTooltipOpen(true);
        setInfoProfileMessage("Данные успешно обновлены");
      })
      .catch((err) => {
        setIsisInfoTooltipOpen(true);
        setInfoProfileMessage("Во время обновления данных произошла ошибка");
        console.log(err);
      });
  }

  //Клик на иконку навигации
  function handleNavigationClick() {
    setIsNagitionOpen(true);
  }

  //Закрытие попапов
  function closeAllPopups() {
    setIsNagitionOpen(false);
    setIsisInfoTooltipOpen(false);
  }

  //Рассчет карточек в зависимости от рарешения
  function handleSetNumCards() {
    setWidth(document.documentElement.clientWidth);
    if (width < 768) {
      setNumCards(5);
    } else if (width >= 768 && width < 1280) {
      setNumCards(8);
    } else {
      setNumCards(12);
    }
  }

  function handleShowMoreCards() {
    if (width < 1280) {
      setNumCards(numCards + 2);
    } else {
      setNumCards(numCards + 4);
    }
  }

  React.useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    handleSetNumCards();
    window.addEventListener("resize", handleSetNumCards);
  }, [width]);

  // Фильтрация карточек
  function filterCards(cards, request) {
    const filerByNameCard = cards.filter(
      (card) =>
        card.nameRu !== null &&
        card.nameEN !== null &&
        card.counry !== null &&
        (card.nameRU.toLowerCase().includes(request.phrase.toLowerCase()) ||
          card.nameEN.toLowerCase().includes(request.phrase.toLowerCase()))
    );
    if (request.check === "true" || request.check === true) {
      return filerByNameCard.filter(
        (card) => parseInt(card.duration / 60) === 0
      );
    } else {
      return filerByNameCard;
    }
  }

  // Сохранение карточки
  function handleSaveCard(data) {
    api
      .addCard(data)
      .then((data) => {
        setSavedCards([...savedCards, data.data]);
      })
      .catch((err) => console.log(err.message));
  }

  // Удаление карточки
  function handleDeleteCard(card) {
    api
      .removeCard(card._id)
      .then((data) => {
        setSavedCards((state) => state.filter((c) => c._id !== card._id));
        setSavedFilteredCards((state) =>
          state.filter((c) => c._id !== card._id)
        );
      })
      .catch((err) => console.log(err.message));
  }

  // Обаботка постановки лайка на странице movies
  function handleSaveOrDeleteCard(data, isLiked) {
    if (isLiked) {
      const deleteCard = savedCards.filter(
        (card) => card.movieId === data.movieId
      )[0];
      handleDeleteCard(deleteCard);
    } else {
      handleSaveCard(data);
    }
  }

  // Получение карточек из moviesApi
  function handleGetCards() {
    setLoading(true);
    moviesApi
      .getCards()
      .then((data) => {
        localStorage.setItem("moviesCards", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMoviesMessage(true);
      })
      .finally(() => setLoading(false));
  }

  // Рендер карточек фильмов
  function handleSearchMovies(request) {
    setInfoMoviesMessage(false);
    setErrorMoviesMessage(false);
    setSeachInputError(false);
    if (request.phrase === "") {
      setSeachInputError(true);
      return;
    }
    if (localStorage.getItem("moviesCards") == null) {
      handleGetCards();
    }
    if (localStorage.getItem("moviesCards") !== null) {
      localStorage.setItem("searchMoviesPhrase", request.phrase);
      localStorage.setItem("searchMoviesCheck", String(request.check));
      const filteredCards = filterCards(
        JSON.parse(localStorage.getItem("moviesCards")),
        request
      );
      setCards(filteredCards);
      localStorage.setItem("filteredMoviesCard", JSON.stringify(filteredCards));
      if (filteredCards.length === 0) {
        setInfoMoviesMessage(true);
      } else {
        setInfoMoviesMessage(false);
      }
      handleSetNumCards();
    }
  }

  // Рендер карточек сохраненных фильмов
  function handleSearchSavedMovies(request) {
    setInfoSavedMoviesMessage(false);
    setSeachInputError(false);
    if (request.phrase === "") {
      setSeachInputError(true);
      return;
    }
    if (savedCards) {
      localStorage.setItem("searchSavedMoviesPhrase", request.phrase);
      localStorage.setItem("searchSavedMoviesCheck", String(request.check));
      const filteredCards = filterCards(savedCards, request);
      setSavedFilteredCards(filteredCards);
      setNumCards(filteredCards.length);
      if (filteredCards.length === 0) {
        setInfoSavedMoviesMessage(true);
      } else {
        setInfoSavedMoviesMessage(false);
      }
      handleSetNumCards(filteredCards.length);
    }
  }

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <Route exact path="/">
              <Main
                isLogin={loggedIn}
                onNavigationClick={handleNavigationClick}
              />
            </Route>
            <Route path="/signin">
              <Login onLogin={onLogin} errorAuthMessage={errorAuthMessage} />
            </Route>
            <Route path="/signup">
              <Register
                onRegister={onRegister}
                errorAuthMessage={errorAuthMessage}
              />
            </Route>
            <ProtectedRoute
              path="/movies"
              component={Movies}
              isLogin={loggedIn}
              onSearch={handleSearchMovies}
              onNavigationClick={handleNavigationClick}
              cards={cards}
              numCards={numCards}
              handleShowMoreCards={handleShowMoreCards}
              showPreloader={loading}
              infoMoviesMessage={infoMoviesMessage}
              errorMoviesMessage={errorMoviesMessage}
              saveCard={handleSaveCard}
              deleteCard={handleDeleteCard}
              onLikeClick={handleSaveOrDeleteCard}
              savedCards={savedCards}
              seachInputError={seachInputError}
            />
            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              isLogin={loggedIn}
              onSearch={handleSearchSavedMovies}
              onNavigationClick={handleNavigationClick}
              cards={savedFilteredCards}
              numCards={savedFilteredCards.length}
              handleShowMoreCards={handleShowMoreCards}
              showPreloader={loading}
              infoMoviesMessage={infoSavedMoviesMessage}
              errorMoviesMessage={errorMoviesMessage}
              saveCard={handleSaveCard}
              deleteCard={handleDeleteCard}
              onLikeClick={handleDeleteCard}
              savedCards={savedCards}
              seachInputError={seachInputError}
            />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              onNavigationClick={handleNavigationClick}
              isLogin={loggedIn}
              onUpdateUser={handleUpdateUser}
              onLogout={onLogout}
              infoEditProfileMessage={infoEditProfileMessage}
            />
            <Route path="*">
              {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
            </Route>
          </Switch>
          <Navigation isOpen={isNagitionOpen} onClose={closeAllPopups} />
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            infoProfileMessage={infoEditProfileMessage}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
