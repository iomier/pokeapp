import React, { useReducer , useContext } from "react";
import styled from "styled-components";
const SearchBar = () => {
  return (
    <StSearch>
      <input
        // value={searchQuery}
        // onChange={e => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </StSearch>
  );
};

export default SearchBar;

const StSearch = styled.form`
  margin: 10px 0;
  input {
    width: 100%;
    border: none;
    padding: 1em;
    border-radius: 5px;

    box-sizing: border-box;
  }
`;
