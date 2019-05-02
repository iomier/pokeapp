import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { StoreContext } from '../Context/StoreContext';

const CardGrid = () => {
  const store = useContext(StoreContext);
  const { pokemons, searchquery } = store.state;

  //filtering items based on searchquery coming from context
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name
      .toString()
      .toLowerCase()
      .startsWith(searchquery)
  );
  return (
    <StCardGrid>
      {filteredPokemons.length > 0
        ? filteredPokemons.map(i => (
            <Card key={i.id} name={i.name} imgLink={i.image} id={i.id} />
          ))
        : 'We have no such thing!!!'}
    </StCardGrid>
  );
};

export default CardGrid;

const StCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
