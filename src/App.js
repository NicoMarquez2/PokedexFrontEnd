import React, { useEffect, useState } from "react";
import "./App.css";
import PokeList from "./Components/PokeList";
import PokeCard from "./Components/PokeCard";
import { BrowserRouter, Routes, Route, } from "react-router-dom";




function App() {
  const url = "http://localhost:3001/pokemon-set";
  const [list, setList] = useState([]);
  const [pokeToShow, setPokeToShow] = useState("")

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a,b)=> a.id - b.id)
        setList(data);
      });
  }, []);


  function getPokemon(pokemon){
    setPokeToShow(pokemon)
  }

  return (
    <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route
            path="/"
            element = {<PokeList list={list} 
                      getPokemon={getPokemon}
                      />}/>    
            
            <Route
            path="/:id"
            element = {<PokeCard
            list={list}
            />}/>                      
          </Routes>         
        </BrowserRouter>
      </React.Fragment>
      
  );
}

export default App;
