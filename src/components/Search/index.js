"use strict";

import React from "react";
import PropTypes from "prop-types";

const Search = ({ handleSearch, isDisabled }) => (
  <div className="search">
    <input
      type="search"
      disabled={isDisabled}
      onKeyUp={handleSearch}
      placeholder="Digite nome de usuário no GitHub"
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Search;
