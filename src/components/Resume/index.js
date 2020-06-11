"use strict";

import React from "react";
import PropTypes from "prop-types";

const Resume = ({ name, login, photo, repos, followers, following }) => (
  <div className="user-resume">
    <img src={photo} />
    <div className="user-info">
      <h1>
        <a href={`https://github.com/${login}`}>{name}</a>
      </h1>
      <ul className="repos-info">
        <li> Repositórios: {repos}</li>
        <li> Seguidores: {followers}</li>
        <li> Seguindo: {following}</li>
      </ul>
    </div>
  </div>
);

Resume.propTypes = {
  userinfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
};

export default Resume;
