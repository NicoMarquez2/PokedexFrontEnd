import React from "react";
import { Link } from "react-router-dom";

const CardTitle = ({pokemon, pokemonIdx, fixId, list})=>{
  console.log(list)
  console.log(pokemonIdx)
    return(
        <React.Fragment>      
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
              {list[pokemonIdx - 1] && (
                <Link to={`/${list[pokemonIdx - 1].id}`}>
                  <img
                    className="rotate"
                    src="/Referencias/Frame.svg"
                    alt="#"
                  />
                </Link>
              )}
              {list[pokemonIdx + 1] && (
                <Link to={`/${list[pokemonIdx + 1].id}`}>
                  <img src="/Referencias/Frame.svg" alt="#" />
                </Link>
              )}
            </div>
        </React.Fragment>
    )
}

export default CardTitle