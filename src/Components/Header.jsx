import React from "react";

const Header = (props)=>{

    function changeOrderImg(){
      if (props.order === "#"){
        console.log("# debe ser A-Z")
        return true
      }
   
      else{
        console.log("A-Z debe ser #")
        return false
      }
    }

    return(
        <header>
            <div className="pokeHeader">
            <div className="titleContainer">
              <img src="/Referencias/Pokeball.png" alt="#" className="pokeball" />
              <h1 className="title">Pokédex</h1>
            </div>
            <div className="orderSelector">
              <span>{(props.order === "Letter") ? "A-Z":"#"}</span>
              <img onClick={()=>props.changeOrder()} alt="#" src="/Referencias/Arrow.svg" />
            </div>
            </div>
            <div id="search-wrapper">
              <input onChange={props.handleChange} type="search" id="search" placeholder="Buscar" />
            </div>
        </header>
    )
}

export default Header;