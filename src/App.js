import React, { useEffect, useState } from "react";
import "./App.css";
import PokeList from "./Components/PokeList";
import PokeCard from "./Components/PokeCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const url = 'http://localhost:8080/pokemon'
  const [list, setList] = useState([]);
  const [pokeToShow, setPokeToShow] = useState("");

  useEffect(() => {
    let aux = []
    async function fetchData(){
      await fetch(url)
      .then((response)=>response.json())
      .then((data) => {
        for(i = 0; i<data.pokemons.length - 1; i++)
        aux.push({
          name: data.pokemons[i].name,
          image: data.pokemons[i].img,
          hp: data.pokemons[i].hp,
          atk: data.pokemons[i].atk,
          def: data.pokemons[i].def,
          satk: data.pokemons[i].satk,
          sdef: data.pokemons[i].sdef,
          spd: data.pokemons[i].spd,
          weigth: data.pokemons[i].weigth,
          heigth: data.pokemons[i].heigth,
          moves: data.movements,
          type:data,
          description: data.pokemons[i].name,
          id: data.pokemons[i].id,
        })
      })
    }
  },[])

  /*useEffect(() => {
    let aux = [];
    async function fetchData() {
      for (let i = 1; i <= 151; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
          .then((response) => response.json())
          .then((data) => {
            getDescription(data).then((description) => {
              aux.push({
                name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                image: data.sprites.other["official-artwork"].front_default,
                hp: data.stats[0].base_stat,
                atk: data.stats[1].base_stat,
                def: data.stats[2].base_stat,
                satk: data.stats[3].base_stat,
                sdef: data.stats[4].base_stat,
                spd: data.stats[5].base_stat,
                weigth: data.weight / 10,
                heigth: data.height / 10,
                moves: data.moves.slice(0, 2).map((move) => move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)),
                type: data.types.map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)),
                description: description.charAt(0).toUpperCase() + description.slice(1),
                id: data.id,
              });
              setList(aux);
            });
          });
      }
      async function getDescription(data) {
        const resp = await fetch(data.species.url);
        const data2 = await resp.json();
        const description = data2.flavor_text_entries.find(data => data.language.name == 'es')
        return description.flavor_text
      }
    }
    fetchData();
  }, []);*/

  function getPokemon(pokemon) {
    setPokeToShow(pokemon);
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PokeList list={list} getPokemon={getPokemon} />}
          />

          <Route path="/:id" element={<PokeCard list={list} />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
