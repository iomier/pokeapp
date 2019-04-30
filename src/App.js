import React, { Component } from "react";
import styled from "styled-components";
import CardGrid from "./Components/CardGrid";
import SearchBar from "./Components/SearchBar";
import SearchContext, { SearchContextProvider } from "./Context/SearchContext";
// Import media
import Abra from "./Assets/img/abra.svg";
import Bellsprout from "./Assets/img/bellsprout.svg";
import Charmander from "./Assets/img/charmander.svg";
import Eevee from "./Assets/img/eevee.svg";
import Squirtle from "./Assets/img/squirtle.svg";
import Jigglypuff from "./Assets/img/jigglypuff.svg";
import Pikachu from "./Assets/img/pikachu-1.svg";
import Meowth from "./Assets/img/meowth.svg";
import Psyduck from "./Assets/img/psyduck.svg";
import Snorlax from "./Assets/img/snorlax.svg";
import Venonat from "./Assets/img/venonat.svg";
import Pidgey from "./Assets/img/pidgey.svg";
import Rattata from "./Assets/img/rattata.svg";
import Mankey from "./Assets/img/mankey.svg";
import Dratini from "./Assets/img/dratini.svg";
import Bullbasaur from "./Assets/img/bullbasaur.svg";
export default class App extends Component {
  state = {
    arr: [
      {
        name: "Abra",
        pic: Abra,
        price: "40"
      },
      {
        name: "Bellsprout",
        pic: Bellsprout,
        price: "40"
      },
      {
        name: "Bullbasaur",
        pic: Bullbasaur,
        price: "40"
      },
      {
        name: "Charmander",
        pic: Charmander,
        price: "40"
      },
      {
        name: "Eevee",
        pic: Eevee,
        price: "40"
      },
      {
        name: "Squirtle",
        pic: Squirtle,
        price: "40"
      },
      {
        name: "Jigglypuff",
        pic: Jigglypuff,
        price: "40"
      },
      {
        name: "Pikachu",
        pic: Pikachu,
        price: "40"
      },
      {
        name: "Meowth",
        pic: Meowth,
        price: "40"
      },
      {
        name: "Psyduck",
        pic: Psyduck,
        price: "40"
      },
      {
        name: "Snorlax",
        pic: Snorlax,
        price: "40"
      },
      {
        name: "Venonat",
        pic: Venonat,
        price: "40"
      },
      {
        name: "Pidgey",
        pic: Pidgey,
        price: "40"
      },
      {
        name: "Rattata",
        pic: Rattata,
        price: "40"
      },
      {
        name: "Mankey",
        pic: Mankey,
        price: "40"
      },
      {
        name: "Dratini",
        pic: Dratini,
        price: "40"
      }
    ]
  };
  render() {
    return (
      <SearchContextProvider>
        <StApp>
          <SearchBar />
          <div className="ad" />
          <CardGrid />
        </StApp>
      </SearchContextProvider>
    );
  }
}

const StApp = styled.div`
  height: 100%;
  padding: 3em;
  .ad {
  }
`;
