import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";


const Compare = (props) => {
    const [firstPokemon, setFirstPokemon] = useState();
    const [secondPokemon, setSecondPokemon] = useState();
    const [notSelected, setNotSelected] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingSecond, setIsLoadingSecond] = useState(false)

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
              setTimeout(() => {
                setIsLoadingSecond(false)
                setSecondPokemon(aux)
                
              }, 1000);
            })
          }
        setIsLoadingSecond(true)
        setNotSelected(false)
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
                setTimeout(() => {
                    setIsLoading(false)
                    setFirstPokemon(aux)
                  }, 1000);
              })
            }
        setIsLoading(true)
        setNotSelected(false)
        fetchData(getId(e.target.value))
        console.log("funciona por favor te pido marta")
    }

function fixStats(pokeStats) {
    if (pokeStats < 100) return "0" + pokeStats;
    else return pokeStats;
  }



    return(
        <div className="compare">
            <div className="compareHeader">
                <Link to={"/"}><img src="/Referencias/arrow-left.svg" /></Link>
                <div>
                  <h1>Compare Pokemon</h1>
                </div>
            </div>
            <div className="comparePokemon">
                    <div className="firstSelect">
                        <label htmlFor="firstPokemon">Choose Pokemon</label>
                        <select className="selectPokemon" name="firstPokemon" onChange={handleFirstSelect}>
                            <option>none</option>
                            {props.list.map((element, key) => (
                                <option key={key} value={`${element.name}`}>{element.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="secondSelect">
                        <label htmlFor="secondPokemon">Choose Pokemon</label>
                        <select className="selectPokemon" name="secondPokemon" onChange={handleSecondSelect}>
                            <option disabled>none</option>
                            {props.list.map((element, key) => (
                                <option key={key} value={`${element.name}`}>{element.name}</option>
                            ))}
                        </select>
                    </div>
                {notSelected && 
                    <h1 className="noSelected">Select Pokemons to Compare</h1>}
                {isLoading ? <img className="loadingImg" src={"./Referencias/loading-13.gif"}/> : firstPokemon && 
                    <div className="pokemons1">
                        <img className="imgCompare1"
                            src={`${firstPokemon.image}`}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="./Referencias/colorPokeball.png";
                            }}
                            alt="" />
                        <div className="spanTypes1">
                            <span>Types</span>
                        </div>
                        <div className="pokeType1">
                            {firstPokemon.type.map((type, key) => (
                            <span
                            key={key}
                            className={`types ${type} lettersWhite typeTitle`}
                            >
                            {type}
                            </span>
                            ))}
                        </div>
                        <p className="pokeStats1">Stats</p>
                        <div className="nameAndNumber1">
                            <div  className="nameAndNumber">
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
                        </div>
                        
                    </div>}
                {isLoadingSecond ? <img className="loadingImgSecond" src={"./Referencias/loading-13.gif"}/> : secondPokemon &&
                    <div className="pokemons2">
                        <img className="imgCompare2"
                            src={`${secondPokemon.image}`}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="./Referencias/colorPokeball.png";
                            }}
                            alt="" />
                        <div className="spanTypes2">
                            <span>Types</span>
                        </div>
                        <div className="pokeType2">                        
                            {secondPokemon.type.map((type, key) => (
                            <span
                            key={key}
                            className={`types ${type} lettersWhite typeTitle`}
                            >
                            {type}
                            </span>
                            ))}
                        </div>
                        <p className="pokeStats2">Stats</p>
                        <div className="nameAndNumber2">
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
                        </div>
                        
                    </div>}  
            </div>
        </div>
    )
} 

export default Compare