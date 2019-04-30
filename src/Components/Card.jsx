import React from "react";
import styled from "styled-components";

const Card = ({ name, price, imgLink }) => {
  return (
    <StCard>
      <img src={imgLink} alt="Pikachu" />
      <h3 className="center">{name}</h3>
      <div className="price-tag">{`${price || 40}$`}</div>
      <a className="add-to-cart" href="/sf">
        ADD TO CART
      </a>
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 2px 0px rgba(184, 184, 184, 1);
  flex: 1;
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
    display: block;
    padding: 0.5em;
    text-decoration: none;
    text-align: center;
    box-shadow: 0px 2px 2px 0px rgba(184, 184, 184, 1);
    &:hover {
      background-color: lightblue;
    }
  }
`;
