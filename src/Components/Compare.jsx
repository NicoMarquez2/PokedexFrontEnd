import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";


const Compare = (props) => {
    const [firstPokemon, setFirstPokemon] = useState();
    const [secondPokemon, setSecondPokemon] = useState();

    function getId(pokemon){
        const findPokemon = props.list.find((element) => element.name == pokemon)
        return findPokemon.id
    }

    const handleSecondSelect = (e) => {
        async function fetchData(id){
            await fetch(`http://localhost:8080/pokemon/${id}`)
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
              setSecondPokemon(aux)
            })
          }
      fetchData(getId(e.target.value))
    }

    const handleFirstSelect = (e) => {
            async function fetchData(id){
              await fetch(`http://localhost:8080/pokemon/${id}`)
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
                setFirstPokemon(aux)
              })
            }
        fetchData(getId(e.target.value))
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
                    <select className="selectPokemon" name="firstPokemon" onChange={handleFirstSelect}>
                        <option disabled>none</option>
                        {props.list.map((element, key) => (
                            <option key={key} value={`${element.name}`}>{element.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="secondPokemon">Choose Pokemon</label>
                    <select className="selectPokemon" name="secondPokemon" onChange={handleSecondSelect}>
                        <option disabled>none</option>
                        {props.list.map((element, key) => (
                            <option key={key} value={`${element.name}`}>{element.name}</option>
                        ))}
                    </select>
                </div>
            </div>
             <div className="pokemons">
             {firstPokemon && 
                <div className="toCompare">
                    <img className="imgCompare" src={`${firstPokemon.image}`} alt="" />
                    <div className="pokeType">
                        {firstPokemon.type.map((type, key) => (
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
                            <span className={`${firstPokemon.type[0]} backgroundWhite`}>
                            HP
                            </span>
                            <span className={`${firstPokemon.type[0]} backgroundWhite`}>
                            ATK
                            </span>
                            <span className={`${firstPokemon.type[0]} backgroundWhite`}>
                            DEF
                            </span>
                            <span className={`${firstPokemon.type[0]} backgroundWhite`}>
                            SATK
                            </span>
                            <span className={`${firstPokemon.type[0]} backgroundWhite`}>
                            SDEF
                            </span>
                            <span className={`${firstPokemon.type[0]} backgroundWhite`}>
                            SPD
                            </span>
                        </div>
                    <hr />
                        <div className="stats">
                            <span>{fixStats(firstPokemon.hp)}</span>
                            <span>{fixStats(firstPokemon.atk)}</span>
                            <span>{fixStats(firstPokemon.def)}</span>
                            <span>{fixStats(firstPokemon.satk)}</span>
                            <span>{fixStats(firstPokemon.sdef)}</span>
                            <span>{fixStats(firstPokemon.spd)}</span>
                        </div>
                    </div>
                </div>}
            {secondPokemon &&
                <div className="toCompare">
                    <img className="imgCompare" src={`${secondPokemon.image}`} alt="" />
                    <span>Types</span>
                    <div className="pokeType">                        
                        {secondPokemon.type.map((type, key) => (
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
                            <span className={`${secondPokemon.type[0]} backgroundWhite`}>
                            HP
                            </span>
                            <span className={`${secondPokemon.type[0]} backgroundWhite`}>
                            ATK
                            </span>
                            <span className={`${secondPokemon.type[0]} backgroundWhite`}>
                            DEF
                            </span>
                            <span className={`${secondPokemon.type[0]} backgroundWhite`}>
                            SATK
                            </span>
                            <span className={`${secondPokemon.type[0]} backgroundWhite`}>
                            SDEF
                            </span>
                            <span className={`${secondPokemon.type[0]} backgroundWhite`}>
                            SPD
                            </span>
                        </div>
                    <hr />
                        <div className="stats">
                            <span>{fixStats(secondPokemon.hp)}</span>
                            <span>{fixStats(secondPokemon.atk)}</span>
                            <span>{fixStats(secondPokemon.def)}</span>
                            <span>{fixStats(secondPokemon.satk)}</span>
                            <span>{fixStats(secondPokemon.sdef)}</span>
                            <span>{fixStats(secondPokemon.spd)}</span>
                        </div>
                    </div>
                </div>}
            </div>     
        </div>
    )
} 

export default Compare