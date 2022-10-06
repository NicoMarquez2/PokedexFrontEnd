import React from "react";
import { useParams } from "react-router-dom";

const PokeCard = (props)=>{
    const params= useParams()
    const id = params.id
    console.log(id)
    return(
        <div>
            <span>{props.pokemon.name}</span>
        </div>
    )
}

export default PokeCard;