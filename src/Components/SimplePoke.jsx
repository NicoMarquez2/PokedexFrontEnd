import React from "react";

const SimplePoke = (props)=>{
    return(
        <div className="simplePokemon">
            <div><span>{props.poke.id}</span></div>
            <div></div>
            <div><span>{props.poke.name}</span></div>
        </div>
    )
}

export default SimplePoke;