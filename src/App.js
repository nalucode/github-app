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
      isFetching: false,
    };
  }

  handleSearch(e) {
    const value = e.target.value;
    const key = e.wich || e.keyCode;
    const ENTER = 13;

    if (key === ENTER) {
      this.setState({ isFetching: true });
      Api(`https://api.github.com/users/${value}`).then((response) => {
        this.setState({
          userInfo: {
            photo: response.avatar_url,
            name: response.name,
            login: response.login,
            followers: response.followers,
            following: response.following,
            repos: response.public_repos,
          },
          repos: [],
          starred: [],
        });
        this.setState({ isFetching: false });
      });
    }
  }

  getRepos(type) {
    return (e) => {
      const { login } = this.state.userInfo;
      Api(`https://api.github.com/users/${login}/${type}`).then((response) => {
        this.setState({
          [type]: response.map((repo) => ({
            name: repo.name,
            link: repo.html_url,
          })),
        });
      });
    };
  }

  render() {
    return (
      <AppContent
        {...this.state}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos("repos")}
        getStarred={this.getRepos("starred")}
      />
    );
  }
}
