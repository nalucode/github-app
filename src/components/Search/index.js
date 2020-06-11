"use strict";

import React from "react";
import PropTypes from "prop-types";

const Search = ({ handleSearch }) => (
  <div className="search">
    <input
      type="search"
      onKeyUp={handleSearch}
      placeholder="Digite nome de usuário no GitHub"
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
