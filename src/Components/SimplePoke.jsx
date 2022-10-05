import React from "react";

const SimplePoke = (props)=>{

    const pokeId = props.poke.fixId

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
        <div className={`simplePokemon ${props.poke.type}`}>
            <div className={`pokeId`}><span>#{fixId(props.poke.id)}</span></div>
            <div><img className="pokeImg" src={`Referencias/${props.poke.name}.png`}/></div>
            <div className={`Pokenombre ${(typeof props.poke.type==="string") ? props.poke.type : props.poke.type[0]}`}><span>{props.poke.name}</span></div>
        </div>
    )
}

export default SimplePoke;