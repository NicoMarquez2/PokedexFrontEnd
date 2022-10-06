import React, { useEffect, useState } from "react";
import "./App.css";
import PokeList from "./Components/PokeList";

function App() {
  const url = "http://localhost:3001/pokemon-set";
  const [list, setList] = useState([]);
  const [value, setValue] = useState(null)
  const [order, setOrder] = useState("id")
  const [pokeToShow, setPokeToShow] = useState(null)
  /*const [matches, setMatches] = useState([])*/

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a,b)=> a.id - b.id)
        setList(data);
      });
  }, []);

  /*useEffect(()=>{
    if(isNaN(value)){
      var expression = /[A-Z]/gi.include
      var matches = []
        matches = list[0].name.match(expression)     
        console.log(matches)
    }
  },[value])*/

  function handleChange(e){
    setValue(e.target.value)
  }

  useEffect(()=>{
    let auxList= list
    if(order === "id"){
      console.log("Ordeno por letra")
      auxList.sort((a,b)=> a.name.toLowerCase() - b.name.toLowerCase())
      //setOrder("Letter")
    }
    else{
      console.log("Ordeno por numero")
      auxList.sort((a,b)=> a.id - b.id)
      //setOrder("id")
    }
    setList(auxList)
    console.log(list)
  },[order])

  function changeOrder(){
    setOrder((order === "id") ? "Letter" : "id")
  }

  function getPokemon(pokemon){
    setPokeToShow(pokemon)
  }

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
          <img onClick={changeOrder} src="/Referencias/Arrow.svg" />
        </div>
        </div>
        <div id="search-wrapper">
          <input onChange={handleChange} type="search" id="search" placeholder="Buscar" />
        </div>
      </header>

      <PokeList list={list} 
                getPokemon={getPokemon}/>

    </React.Fragment>
  );
}

export default App;
