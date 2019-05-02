import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';

import styled from 'styled-components';
import Card from './Card';

const Cart = () => {
  const store = useContext(StoreContext);
  return (
    <StCart>
      <h2>Items:</h2>
      <div className='cartList'>
        {store.state.cartitems.map(item => (
          <div className='cartListItem'>
            <h2>{item.name}</h2>
            <img src={item.image} alt='' />
          </div>
        ))}
      </div>

      {console.log(store.state.cartitems)}
    </StCart>
  );
};

export default Cart;

const StCart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #e1e1e1;
  z-index: 1;
  transition: all 0.25s ease-in-out;
  .cartList {
    display: flex;
    padding: 20px;
    flex-wrap: wrap;

    overflow-x: scroll;
    height: 100%;
    .cartListItem {
      width: 120px;
      margin-right: 30px;
    }
  }
`;

const StCardItem = styled.div``;
