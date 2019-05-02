import React from 'react';
import styled from 'styled-components';
import CardGrid from './Components/CardGrid';
import SearchBar from './Components/SearchBar';

import { StoreProvider } from './Context/StoreContext';
import Header from './Components/Header';
import Cart from './Components/Cart';

const App = props => {
  return (
    <StoreProvider>
      <StApp>
        <Cart />
        <Header />
        <SearchBar />
        <div className='ad' />
        <CardGrid />
      </StApp>
    </StoreProvider>
  );
};

export default App;

const StApp = styled.div`
  height: 100%;
  padding: 3em;
  .ad {
  }
`;
