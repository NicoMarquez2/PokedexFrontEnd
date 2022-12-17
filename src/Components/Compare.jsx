import React from "react";
import { Link } from "react-router-dom";


const Compare = (props) => {
    const handleButton = (e) => {
        e.preventDefault()
        console.log(props.list)
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
                    <select className="selectPokemon" name="firstPokemon">
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
            <div className="pokemons">
                <div className="toCompare">
                    <p>POKEMON</p>
                </div>
                <div className="toCompare">
                    <p>POKEMON</p>
                </div>
            </div>      
        </div>
    )
} 

export default Compare