import React, { useEffect, useState } from "react";
import "./App.css";
import PokeList from "./Components/PokeList";
import PokeCard from "./Components/PokeCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [list, setList] = useState([]);
  const [pokeToShow, setPokeToShow] = useState("");

  useEffect(() => {
    let aux = [];
    async function fetchData() {
      for (let i = 1; i <= 100; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
          .then((response) => response.json())
          .then((data) => {
            getDescription(data).then((description) => {
              console.log(description, "desc.");
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
                moves: data.moves.slice(0, 2).map((move) => move.move.name),
                type: data.types.map((type) => type.type.name),
                description,
                id: data.id,
              });
              console.log("aux", aux);
              setList(aux);
            });
          });
      }
      async function getDescription(data) {
        const resp = await fetch(data.species.url);
        const data2 = await resp.json()
        return data2.flavor_text_entries[69].flavor_text 

      }
    }
    fetchData();
  }, []);

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
