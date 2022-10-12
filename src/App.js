import React, { useEffect, useState } from "react";
import "./App.css";
import PokeList from "./Components/PokeList";
import PokeCard from "./Components/PokeCard";
import { BrowserRouter, Routes, Route, } from "react-router-dom";




function App() {
  const url = "http://localhost:3001/pokemon-set";
  const [list, setList] = useState([]);
  const [order, setOrder] = useState("id")
  const [pokeToShow, setPokeToShow] = useState("")

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a,b)=> a.id - b.id)
        setList(data);
      });
  }, []);

  useEffect(()=>{
    let auxList = list
    if(auxList.length == 0){
      return
    }

    if(order === "id"){
      console.log("Ordeno por letra")
      console.log(order)
      auxList.sort((a,b)=> String(a.name).localeCompare(b.name))
    }

    else{
      console.log("Ordeno por numero")
      console.log(order)
      auxList.sort((a,b)=> a.id - b.id)
    }
    console.log(auxList)
    setList(auxList)   
  })

  function changeOrder(){
    if(list.length > 0){
      setOrder((order === "id") ? "Letter" : "id")
    }   
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
                      order={order}
                      />}/>    
            
            <Route
            path="/:id"
            element = {<PokeCard
            list={list}
            order={order}
            />}/>                      
          </Routes>         
        </BrowserRouter>
      </React.Fragment>
      
  );
}

export default App;
