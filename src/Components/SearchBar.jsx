import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../Context/StoreContext';
import { types } from '../Context/Reducers';
const SearchBar = () => {
  const store = useContext(StoreContext);
  return (
    <StSearch>
      <input
        onChange={e =>
          store.dispatch({
            type: types.SEARCH_ITEMS,
            keyword: e.target.value
          })
        }
        value={store.state.searchquery}
        type='text'
        placeholder='Search...'
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
