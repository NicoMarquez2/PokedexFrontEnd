import React from "react";
import SimplePoke from "./SimplePoke";
import Header from "./Header";


const PokeList = (props)=>{
    return(        
            <React.Fragment>
                <Header
                    changeOrder={props.changeOrder}
                    handleChange={props.handleChange}/>
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
            </React.Fragment>      
                
    )
}

export default PokeList;