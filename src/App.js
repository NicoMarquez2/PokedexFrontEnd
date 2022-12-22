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


  useEffect(() => {
    let aux = []
    async function fetchData(){
      await fetch(url)
      .then((response)=>response.json())
      .then((data) => {
        /*setPokemons(data.pokemons)
        setTypes(data.pokemonTypes)
        setMovements(data.pokemonMovements)*/
        for(let i = 0; i<=data.pokemons.length - 1; i++)
        aux.push({
          name: data.pokemons[i].name,
          image: data.pokemons[i].img,
          hp: data.pokemons[i].hp,
          atk: data.pokemons[i].atk,
          def: data.pokemons[i].def,
          satk: data.pokemons[i].satk,
          sdef: data.pokemons[i].sdef,
          spd: data.pokemons[i].spd,
          weigth: data.pokemons[i].weight,
          heigth: data.pokemons[i].height,
          moves: data.pokemonMovements[0].filter(move => move.id_pokemon == data.pokemons[i].id).map(move => move.movement),
          type: data.pokemonTypes[0].filter(type => type.id_pokemon == data.pokemons[i].id).map(type => type.type),
          description: data.pokemons[i].description,
          id: data.pokemons[i].id,
        })
        setTimeout(() => {
          setIsLoading(false)
          setList(aux)
          
        }, 1000);
      })
    }
    setIsLoading(true)
    fetchData()
    console.log(list)
  },[])

  function getPokemon(pokemon) {
    setPokeToShow(pokemon);
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PokeList list={list} isLoading={isLoading} getPokemon={getPokemon}/>}
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
