import React from "react";
import SimplePoke from "./SimplePoke";


const PokeList = (props)=>{
    return(              
            <div className="mainList">
                {
                    props.list.map((poke, key)=>
                        <SimplePoke
                        poke={poke}
                        key={key}
                        getPokemon={props.getPokemon}
                        />
                    )                    
                }
            </div>       
    )
}

export default PokeList;