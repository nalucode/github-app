"use strict";

import React, { Component } from "react";

import AppContent from "./components/Container";
import "./App.css";

import Api from "./helper/request";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  handleSearch(e) {
    const value = e.target.value;
    const key = e.wich || e.keyCode;
    const ENTER = 13;

    if (key === ENTER) {
      Api(`https://api.github.com/users/${value}`).then((response) => {
        const {
          avatar_url,
          followers,
          following,
          login,
          name,
          public_gists,
          public_repos,
        } = response;

        this.setState({
          userInfo: {
            photo: avatar_url,
            name,
            login,
            followers,
            following,
            repos: public_repos,
          },
        });
      });
    }
  }

  render() {
    return (
      <AppContent
        handleSearch={(e) => this.handleSearch(e)}
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}
