import React, { useEffect, useState } from "react";
import "./App.css";
import PokeList from "./Components/PokeList";
import PokeCard from "./Components/PokeCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreatePokemon from "./Components/CreatePokemon";
import Compare from "./Components/Compare";

function App() {
  const url = 'http://localhost:8080/pokemon'
  const [list, setList] = useState([]);
  const [pokemons, setPokemons] =useState([])
  const [types, setTypes] =useState([])
  const [movements, setMovements] =useState([])
  const [pokeToShow, setPokeToShow] = useState("");
  const [userLogged, setUserLogged] = useState(false) 
  const [isLoading, setIsLoading] = useState(false)


  function getPokemon(pokemon) {
    setPokeToShow(pokemon);
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PokeList list={setList} isLoading={isLoading} getPokemon={getPokemon}/>}
          />

          <Route path="/:id" element={<PokeCard list={list} />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create" element={<CreatePokemon/>}/>
          <Route path="/compare" element={<Compare list={list}/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
