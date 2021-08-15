class mainApi {
  constructor(config) {
    this._url = config.url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _getHeaders() {
    const jwt = localStorage.getItem("jwt");
    return { "Content-Type": "application/json", 'authorization': `Bearer ${jwt}` }
  }

  getCards() {
    return fetch(`${this._url}movies`, {
      method: "GET",
      headers: this._getHeaders()
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._getHeaders()
    }).then(this._checkResponse);
  }

  addCard(data) {
    return fetch(`${this._url}movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  editProfile(data) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  removeCard(cardId) {
    return fetch(`${this._url}movies/${cardId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }
}

export const api = new mainApi({
  url: "https://api.radkovskaya-diploma.nomoredomains.monster/",
});
