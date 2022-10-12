import React from "react";

const Header = (props)=>{

    return(
        <header>
            <div className="pokeHeader">
            <div className="titleContainer">
              <img src="/Referencias/Pokeball.png" alt="#" className="pokeball" />
              <h1 className="title">Pokédex</h1>
            </div>
            <div className="orderSelector">
              <span>{(props.order === "id") ? "A-Z":"#"}</span>
              <img onClick={()=>props.changeOrder()} alt="#" src="/Referencias/Arrow.svg" />
            </div>
            </div>
            <div className="searchPokemon">
              <input onChange={props.handleChange} type="search" className="search" placeholder="Buscar" />
            </div>
        </header>
    )
}

export default Header;