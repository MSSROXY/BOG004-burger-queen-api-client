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

export const setUser = (data) => {
  localStorage.setItem('myUser', data);
};

export const getUser = () => {
  return localStorage.getItem('myUser');
};

export const sendOrderRequest = (url,token, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token
    },
    
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  })
}

export const listOrderRequest = (url,token) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  }).then((res) => {
    return res.json();
  });
}

export const changeStatusRequest =(url,token,data) =>{
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token
    },
    
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  })
}

export const deleteOrderRequest = (url,token) => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  }).then((res) => {
    return res.json();
  });
}

export const getUsersRequest = (url,token) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  }).then((res) => {
    return res.json();
  });
}

export const deleteUserRequest = (url, token) => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  }).then((res) => {
    return res.json();
  });
}

export const editUserDataRequest =(url,token,data) =>{
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token
    },
    
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  })
}

export const userRegisterRequest = (url,token, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token
    },
    
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  })
}