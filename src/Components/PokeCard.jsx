import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

const PokeCard = (props) => {
  const [pokemon, setpokemon] = useState();
  const [pokemonIdx, setpokemonIdx] = useState();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const pokemon = props.list.find((element, idx) => {
      setpokemonIdx(idx);
      return element.id == id;
    });
    setpokemon(pokemon);
  }, [props.list, id]);

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
      {pokemon && (
        <div
          className={`pokeCardOnly ${
            pokemon.type === "string" ? pokemon.type : pokemon.type[0]
          }`}
        >
          <div className="cardTitle">
            <div>
              <img src="/Referencias/Pokeball.png" className="pokebackground" />
            </div>
            <div className="header">
              <div className="lettersWhite">
                <Link to={"/"}>
                  <img src="/Referencias/arrow-left.svg" className="arrow" />
                </Link>

                <span className="pokeName">{pokemon.name}</span>
              </div>
              <div className="lettersWhite bold">
                <span>#{fixId(pokemon.id)}</span>
              </div>
            </div>
            <div className={`navigate ${pokemonIdx == 0 ? "onlyToRight" : ""}`}>
              {props.list[pokemonIdx - 1] && (
                <Link to={`/${props.list[pokemonIdx - 1].id}`}>
                  <img
                    className="rotate"
                    src="/Referencias/Frame.svg"
                    alt="#"
                  />
                </Link>
              )}
              {props.list[pokemonIdx + 1] && (
                <Link to={`/${props.list[pokemonIdx + 1].id}`}>
                  <img src="/Referencias/Frame.svg" alt="#" />
                </Link>
              )}
            </div>
          </div>

          <img
            className="imgPokeCard"
            src={`Referencias/${pokemon.name}.png`}
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
                  {typeof pokemon.moves === "string" ? (
                    <div>
                      <span>{pokemon.moves}</span>
                    </div>
                  ) : (
                    <div className="prueba">
                      <span className={`${pokemon.moves[0]}`}>
                        {pokemon.moves[0]}
                      </span>
                      <span className={`${pokemon.moves[1]}`}>
                        {pokemon.moves[1]}
                      </span>
                    </div>
                  )}
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
