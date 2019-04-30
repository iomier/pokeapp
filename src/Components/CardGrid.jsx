import React, { useContext } from "react";
import styled from "styled-components";
import SearchContext, { SearchContextProvider } from "../Context/SearchContext";
import Card from "./Card";

const CardGrid = props => {
  const value = useContext(SearchContextProvider);
  return (
    <StCardGrid>
      {value.arr.map(i => (
        <Card key={i.name} name={i.name} imgLink={i.pic} />
      ))}
    </StCardGrid>
  );
};

export default CardGrid;

const StCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
