import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../Context/StoreContext';
import { types } from '../Context/Reducers';

const handleSubmit = (e, item, store) => {
  e.preventDefault();
  const itemToCart = store.state.pokemons.filter(e => {
    return e.id === item;
  });
  store.dispatch({ type: 'ADD_ITEM_TO_CART', payload: itemToCart });
  console.log(store);
};
const Card = ({ name, price, imgLink, id }) => {
  const store = useContext(StoreContext);
  return (
    <StCard>
      <img src={imgLink} alt='Pikachu' />
      <h3 className='center'>{name}</h3>
      <div className='price-tag'>{`${price || 40}$`}</div>
      <button
        onClick={(e, item, con) => handleSubmit(e, id, store)}
        className='add-to-cart'>
        ADD TO CART
      </button>
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 2px 0px rgba(184, 184, 184, 1);
  flex: 1;
  text-align: center;
  padding: 2em;
  .center {
    margin: 0;
    text-align: center;
  }
  .price-tag {
    text-align: center;
    font-size: 2em;
    font-weight: 600;
    color: darkgreen;
  }
  .add-to-cart {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px auto;
    cursor: pointer;
    &:hover {
      background-color: lightblue;
    }
  }
`;
