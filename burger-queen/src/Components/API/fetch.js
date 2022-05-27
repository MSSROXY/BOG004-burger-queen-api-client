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

export const productsRequest = (url, token) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: 'Bearer ' + token,
    },
  }).then((res) => {
    return res.json();
  });
};