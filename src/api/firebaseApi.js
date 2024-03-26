import React from "react";
import objectToArray from "./objectToArray";
import { makeAuthorizedRequest } from "../auth/makeAuthorizedRequest";


export class FireBaseAPI extends React.Component {
  apiUrl = "https://bookingappnew-default-rtdb.firebaseio.com/dataBase";


  loadData = (user, key) => {
    return makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}.json?auth=${this.token}`)
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error);
      });
  };

  addNewUser = (user, token) => {
    fetch(`${this.apiUrl}/${user}.json?auth=${token}`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error);
      });
  };

  addData = (user, key, data) => {
    return makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}.json?auth=${this.token}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.error(error);
    });
  };

  removeData = (user, key, id) => {
    makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}/${id}.json?auth=${this.token}`, {
      method: "DELETE",
    }).catch((error) => {
      console.error(error);
    });
  };

  editData = (user, key, id, newData) => {
    makeAuthorizedRequest(`${this.apiUrl}/${user}/${key}/${id}.json?auth=${this.token}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => objectToArray(data))
      .catch((error) => {
        console.error(error);
      });
  };
}

export default FireBaseAPI;
