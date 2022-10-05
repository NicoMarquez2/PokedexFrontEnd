import React, { useEffect, useState } from "react";
import "./App.css";
import PokeList from "./Components/PokeList";

function App() {
  const url = "http://localhost:3001/pokemon-set";
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  return (
    <React.Fragment>
      <header>
        <div className="pokeHeader">
        <div className="titleContainer">
          <img src="/Referencias/Pokeball.png" className="pokeball" />
          <h1 className="title">Pokédex</h1>
        </div>
        <div className="orderSelector">
          #
          <img src="/Referencias/Arrow.svg" />
        </div>
        </div>
        <div id="search-wrapper">
          <input type="search" id="search" placeholder="Buscar" />
          <i class="fa fa-search"></i>
        </div>
      </header>

      <PokeList list={list} />
    </React.Fragment>
  );
}

export default App;
