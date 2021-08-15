export const BASE_URL = "https://api.radkovskaya-diploma.nomoredomains.monster";

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(
        new Error(`Ошибка ${response.status}: ${response.statusText}`)
      );
};

const headers = {
  "Content-Type": "application/json",
};

export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: "POST",
    body: JSON.stringify({ email: data.email, password: data.password, name:data.name }),
  }).then((res) => checkResponse(res));
};

export const authorize = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: "POST",
    body: JSON.stringify({ email: data.email, password: data.password }),
  }).then((res) => checkResponse(res));
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};
