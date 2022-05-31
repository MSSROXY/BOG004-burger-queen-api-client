export const loginRequest = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

const tokenUser = "BQ-token";
export const setToken = (token) => {
  localStorage.setItem(tokenUser, token);
};

export const getToken = () => {
  return localStorage.getItem(tokenUser);
};

export const deleteToken = () => {
  localStorage.removeItem(tokenUser);
};

export const productsRequest = (url, token) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  }).then((res) => {
    return res.json();
  });
};
