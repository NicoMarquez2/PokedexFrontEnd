import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";


const Compare = (props) => {

    const handleButton = (e) => {
        e.preventDefault()
        console.log(props.list)
    }
    const [pokemon, setPokemon] = useState();

const handleSelect = () => {
            async function fetchData(){
              await fetch('http://localhost:8080/pokemon/144')
              .then((response)=>response.json())
              .then((data) => {
                let aux 
                console.log(data.pokemon[0])
                aux ={
                  name: data.pokemon[0].name,
                  image: data.pokemon[0].img,
                  hp: data.pokemon[0].hp,
                  atk: data.pokemon[0].atk,
                  def: data.pokemon[0].def,
                  satk: data.pokemon[0].satk,
                  sdef: data.pokemon[0].sdef,
                  spd: data.pokemon[0].spd,
                  weigth: data.pokemon[0].weight,
                  heigth: data.pokemon[0].height,
                  moves: data.movements[0].filter(move => move.id_pokemon == data.pokemon[0].id).map(move => move.movement),
                  type: data.types[0].filter(type => type.id_pokemon == data.pokemon[0].id).map(type => type.type),
                  description: data.pokemon[0].description,
                  id: data.pokemon[0].id,
                }
                setPokemon(aux)
              })
            } 
        fetchData()
        console.log("funciona por favor te pido marta")
}

function fixStats(pokeStats) {
    if (pokeStats < 100) return "0" + pokeStats;
    else return pokeStats;
  }



    return(
        <div className="comparePokemon">
            <div className="authHeader">
                <Link to={"/"}><img src="/Referencias/arrow-left.svg" /></Link>
                <div>
                  <h1>Compare Pokemon</h1>
                </div>
            </div>
            <div className="selection">
                <div>
                    <label htmlFor="firstPokemon">Choose Pokemon</label>
                    <select className="selectPokemon" name="firstPokemon" onChange={handleSelect}>
                        {props.list.map((element, key) => (
                            <option key={key} value={`${element.name}`}>{element.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="secondPokemon">Choose Pokemon</label>
                    <select className="selectPokemon" name="secondPokemon">
                        {props.list.map((element, key) => (
                            <option key={key} value={`${element.name}`}>{element.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            {pokemon && <div className="pokemons">
                <div className="toCompare">
                    <div className="pokeType">
                        {pokemon.type.map((type, key) => (
                        <span
                        key={key}
                        className={`types ${type} lettersWhite typeTitle`}
                        >
                        {type}
                        </span>
                        ))}
                    </div>
                    <div className="nameAndNumber">
                        <div className="stats">
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            HP
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            ATK
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            DEF
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            SATK
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            SDEF
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            SPD
                            </span>
                        </div>
                    <hr />
                        <div className="stats">
                            <span>{fixStats(pokemon.hp)}</span>
                            <span>{fixStats(pokemon.atk)}</span>
                            <span>{fixStats(pokemon.def)}</span>
                            <span>{fixStats(pokemon.satk)}</span>
                            <span>{fixStats(pokemon.sdef)}</span>
                            <span>{fixStats(pokemon.spd)}</span>
                        </div>
                    </div>
                </div>
                <div className="toCompare">
                    <div className="pokeType">
                        {pokemon.type.map((type, key) => (
                        <span
                        key={key}
                        className={`types ${type} lettersWhite typeTitle`}
                        >
                        {type}
                        </span>
                        ))}
                    </div>
                    <div className="nameAndNumber">
                        <div className="stats">
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            HP
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            ATK
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            DEF
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            SATK
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            SDEF
                            </span>
                            <span className={`${pokemon.type[0]} backgroundWhite`}>
                            SPD
                            </span>
                        </div>
                    <hr />
                        <div className="stats">
                            <span>{fixStats(pokemon.hp)}</span>
                            <span>{fixStats(pokemon.atk)}</span>
                            <span>{fixStats(pokemon.def)}</span>
                            <span>{fixStats(pokemon.satk)}</span>
                            <span>{fixStats(pokemon.sdef)}</span>
                            <span>{fixStats(pokemon.spd)}</span>
                        </div>
                    </div>
                </div>
            </div>}      
        </div>
    )
} 

export default Compare