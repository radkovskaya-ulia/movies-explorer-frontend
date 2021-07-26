import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies"
import "./App.css";
import NotFound from "../NotFound/NotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [isNagitionOpen, setIsNagitionOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsisInfoTooltipOpen] = React.useState(false);

  function handleNavigationClick() {
    setIsNagitionOpen(true);
  }

  function closeAllPopups() {
    setIsNagitionOpen(false);
    setIsisInfoTooltipOpen(false);
  }

  return (
    <div className="page">
      <div className="page__content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route path="/movies">
              <Movies onNavigationClick={handleNavigationClick} />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies onNavigationClick={handleNavigationClick} />
            </Route>
            <Route path="/profile">
              <Profile onNavigationClick={handleNavigationClick} />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Navigation isOpen={isNagitionOpen} onClose={closeAllPopups} />
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
          />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
