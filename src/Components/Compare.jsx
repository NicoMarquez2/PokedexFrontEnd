import React from "react";
import { Link } from "react-router-dom";


const Compare = () => {
    return(
        <div className="comparePokemon">
            <div className="authHeader">
                <Link to={"/"}><img src="/Referencias/arrow-left.svg" /></Link>
                <div>
                  <h1>Compare Pokemon</h1>
                </div>
            </div>
            <div className="selectPokemon">

            </div>
            <div className="selectPokemon">

            </div>
        </div>
    )
} 

export default Compare