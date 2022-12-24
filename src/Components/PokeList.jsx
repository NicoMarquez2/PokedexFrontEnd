import React, { useEffect, useState }  from "react";
import SimplePoke from "./SimplePoke";
import Header from "./Header";
import CreateButton from "./CreateButton";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const PokeList = (props) => {
  const url = 'http://localhost:8080/pokemon'
  const [value, setValue] = useState("");
  const [order, setOrder] = useState("Letter");
  const [auxList,setAuxList] = useState([])
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false) 
  let navigate = useNavigate('')

  useEffect(() => {
    let aux = []
    async function fetchData(){
      await fetch(url)
      .then((response)=>response.json())
      .then((data) => {
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
          props.list(aux)
          
        }, 1000);
      })
    }
    setIsLoading(true)
    fetchData()
  },[])

  const handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("userToken")
    navigate('/')
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  
  useEffect(()=>{
    if(order === "id"){
      list.sort((a,b)=> String(a.name).localeCompare(b.name))
    }

    else{
      list.sort((a,b)=> a.id - b.id)
    }
    setAuxList(Object.assign([],list))   
  },[order,list])

  function changeOrder(){
      setOrder((order === "id") ? "Letter" : "id")
    
  }

  return (
    <React.Fragment>
      
      {isLoading ? <img className="loadingGeneral" src={"./Referencias/loading-13.gif"}/> : <div className="listComponent">
        <Navbar
          handleLogOut={handleLogOut}/>
        <Header
          changeOrder={changeOrder}
          handleChange={handleChange}
          order={order}
        />
        <div className="mainList">
          {localStorage.userToken && (
            <CreateButton/>
          )}
          {auxList.filter((pokemon)=>pokemon.name.toLowerCase().includes(value.toLowerCase())).map((poke, index) => (
            <SimplePoke
              list={list}
              poke={poke}
              key={poke.id}
              getPokemon={props.getPokemon}
            />
          ))}
        </div>
      </div>}
    </React.Fragment>
  );
};

export default PokeList;