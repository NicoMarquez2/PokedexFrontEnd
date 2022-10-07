import React, { useEffect, useState } from "react";
import "./App.css";
import PokeList from "./Components/PokeList";
import PokeCard from "./Components/PokeCard";
import { BrowserRouter, Routes, Route, } from "react-router-dom";




function App() {
  const url = "http://localhost:3001/pokemon-set";
  const [list, setList] = useState([]);
  const [value, setValue] = useState(null)
  const [order, setOrder] = useState("id")
  const [pokeToShow, setPokeToShow] = useState("")
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
    let auxList = list
    if(order === "id"){
      console.log("Ordeno por letra")
      auxList.sort((a,b)=> String(a.name).localeCompare(b.name))
      //setOrder("Letter")
    }
    else{
      console.log("Ordeno por numero")
      auxList.sort((a,b)=> a.id - b.id)
      //setOrder("id")
    }
    console.log(auxList)
    setList(auxList)
    
  },[order])

  function changeOrder(){
    setOrder((order === "id") ? "Letter" : "id")
  }

  function getPokemon(pokemon){
    setPokeToShow(pokemon)
    console.log(pokeToShow)
  }

  return (
    <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route
            path="/"
            element = {<PokeList list={list} 
                      getPokemon={getPokemon}
                      changeOrder={changeOrder}
                      handleChange={handleChange}/>}/>    
            
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
