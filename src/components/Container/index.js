"use strict";

import React from "react";
import PropTypes from "prop-types";

import Search from "../Search";
import Resume from "../Resume";
import Actions from "../Actions";
import Repos from "../Repos";

const AppContent = ({ userInfo, repos, starred, handleSearch }) => (
  <div className="app">
    <Search handleSearch={handleSearch} />
    {!!userInfo && <Resume {...userInfo} />}
    {!!userInfo && <Actions />}
    {!!repos.lenght && (
      <Repos className="repos" title="Repositórios" repos={repos} />
    )}
    {!!starred.lenght && (
      <Repos className="starred" title="Favoritos" repos={starred} />
    )}
  </div>
);

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default AppContent;
