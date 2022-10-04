import React, { useEffect, useState } from 'react';
import './App.css';
import PokeList from './Components/PokeList';

function App() {
  const url = "http://localhost:3001/pokemon-set"
  const [list, setList] = useState([])

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setList(data)
    });
  },[])


  return (
    <React.Fragment>
      <header>
        
      </header>

      <PokeList
      list={list}/>
    </React.Fragment>
    
  );
}

export default App;
