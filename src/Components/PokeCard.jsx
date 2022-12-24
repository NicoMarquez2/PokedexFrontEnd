import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import CardTitle from "./CardTitle";
import Error from "./Error";

const PokeCard = (props) => {
  const [pokemon, setpokemon] = useState();
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const params = useParams();
  const id = params.id;
  const url = `http://localhost:8080/pokemon/${id}`
  const [isLoading, setIsLoading] = useState(false)
  
  function doNothing(){
    return
  }

  useEffect(() => {
    props.list ? doNothing(): 
      console.log("")
      let aux = []
      async function fetchData(){
        await fetch('http://localhost:8080/pokemon')
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
            
          }, 1000);
        })
      }
      setIsLoading(true)
      fetchData()
  },[])

  useEffect(() => {
    let aux 
    async function fetchData(){
      await fetch(url)
      .then((response)=>response.json())
      .then((data) => {
        if(data.message){
          setError(true)
        } else {
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
            setpokemon(aux)
          }, 1000);
        }      
      })
    }
    setIsLoading(true)
    fetchData()
  },[id])

  function fixId(pokeId) {
    if (pokeId < 10) {
      return "00" + pokeId;
    } else if (pokeId >= 10 && pokeId < 100) {
      return "0" + pokeId;
    } else {
      return pokeId;
    }
  }

  function fixStats(pokeStats) {
    if (pokeStats < 100) return "0" + pokeStats;
    else return pokeStats;
  }

  return (
    <React.Fragment>
      {error && <Error></Error>}
      {isLoading ? <img className="loadingGeneral" src={"./Referencias/loading-13.gif"}/> : pokemon && (
        <div
          className={`pokeCardOnly ${pokemon.type[0]}`}
        >
          <div className="cardTitle">
              <CardTitle
              pokemon={pokemon}
              fixId={fixId}
              list={list ? list : props.list}
              id={id}/>
          </div>

          <img
            className="imgPokeCard"
            src={`${pokemon.image}`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src="./Referencias/colorPokeball.png";
            }}
          />

          <div className="pokeDescription">
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

            <div className="pokeAbout">
              <span className={`subtitle ${pokemon.type[0]} backgroundWhite`}>
                About
              </span>
              <div className="pokeInfo">
                <div className="categoryLeft">
                  <div>
                    <img
                      src="/Referencias/Weight.svg"
                      alt="#"
                      className="imgCategory"
                    />
                    <span className="spanCategory">{pokemon.weigth} Kg</span>
                  </div>

                  <span className="categoryTitle">Weight</span>
                </div>
                <hr></hr>
                <div className="category">
                  <div>
                    <img
                      src="/Referencias/Height.svg"
                      alt="#"
                      className="imgCategory"
                    />
                    <span className="spanCategory">{pokemon.heigth} m</span>
                  </div>

                  <span className="categoryTitle">Heigth</span>
                </div>
                <hr></hr>

                <div className="categoryRigth">
                {pokemon.moves.map((moves, key) => (
                <span
                  key={key}
                  >
                  {moves}
                </span>
              ))}
                  <span className="categoryTitle">Moves</span>
                </div>
              </div>
            </div>

            <div className="pokeSummary">
              <span>{pokemon.description}</span>
            </div>

            <div className="pokeStats">
              <div>
                <span
                  className={` subtitle2 ${pokemon.type[0]} backgroundWhite`}
                >
                  Base Stats
                </span>
              </div>
              <div className="statsFlex">
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

                <div className="stateBar">
                  <ProgressBar poke={pokemon} stat={pokemon.hp}></ProgressBar>
                  <ProgressBar poke={pokemon} stat={pokemon.atk}></ProgressBar>
                  <ProgressBar poke={pokemon} stat={pokemon.def}></ProgressBar>
                  <ProgressBar poke={pokemon} stat={pokemon.satk}></ProgressBar>
                  <ProgressBar poke={pokemon} stat={pokemon.sdef}></ProgressBar>
                  <ProgressBar poke={pokemon} stat={pokemon.spd}></ProgressBar>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PokeCard;
