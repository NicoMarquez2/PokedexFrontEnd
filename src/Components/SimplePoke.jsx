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
        <div className="simplePokemon">
            <div><span>#{fixId(props.poke.id)}</span></div>
            <div><img src={`Referencias/${props.poke.name}.png`}/></div>
            <div><span>{props.poke.name}</span></div>
        </div>
    )
}

export default SimplePoke;