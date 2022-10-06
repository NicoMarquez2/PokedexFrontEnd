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
              #
              <img onClick={props.changeOrder} alt="#" src="/Referencias/Arrow.svg" />
            </div>
            </div>
            <div id="search-wrapper">
              <input onChange={props.handleChange} type="search" id="search" placeholder="Buscar" />
            </div>
        </header>
    )
}

export default Header;