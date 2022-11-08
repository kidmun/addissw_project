import { API_URL } from "../../util/url";

export function requestGetUsers() {
  return fetch(API_URL).then((response) => {
    if (!response.ok) {
      throw new Error("response not ok");
    }
    return response.json();
  });
}
export function requestAddUser(users) {
  return fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("response not ok");
    }
    return response.json();
  });
}
export function requestDeleteUser(users) {
  return fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("response not ok");
    }
    return response.json();
  });
}
export function requestUpdateUser(users) {
  return fetch("https://addis-e2df3-default-rtdb.firebaseio.com/users.json", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("response not ok");
    }
    return response.json();
  });
}
