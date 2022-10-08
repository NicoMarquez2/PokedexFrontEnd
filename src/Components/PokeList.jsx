import React from "react";
import SimplePoke from "./SimplePoke";
import Header from "./Header";


const PokeList = (props)=>{
    return(        
            <React.Fragment>
                <div className="listComponent">
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
                </div>
                
            </React.Fragment>      
                
    )
}

export default PokeList;