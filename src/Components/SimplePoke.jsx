import React from "react";
import { Link } from "react-router-dom";

const SimplePoke = (props)=>{

     function fixId(pokeId){
        if (pokeId < 10){
            return "00"+pokeId
        }
        else if (pokeId >= 10 && pokeId < 100){
            return "0"+pokeId
        }
        else{
            return pokeId
        }
     } 

    return(
        <Link to={`/${props.poke.id}`} className={`simplePokemon ${(typeof props.poke.type==="string") ? props.poke.type : props.poke.type[0]}`}>
            <div className={`pokeId ${(typeof props.poke.type==="string") ? props.poke.type : props.poke.type[0]}`}><span>#{fixId(props.poke.id)}</span></div>
            <div><img className="pokeImg" src={`Referencias/${props.poke.name}.png`} alt="#"/></div>
            <div className={`Pokenombre ${(typeof props.poke.type==="string") ? props.poke.type : props.poke.type[0]}`}><span>{props.poke.name}</span></div>
        </Link>
    )
}

export default SimplePoke;