import React from 'react';
import styled from 'styled-components';
const Header = () => {
  return (
    <StHeader>
      <h1>PokeApp</h1>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  text-align: center;
  padding: 0.2em;
  background-color: #bada55;
`;
