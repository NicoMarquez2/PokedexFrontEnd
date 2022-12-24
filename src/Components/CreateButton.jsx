import React from "react";
import { Link } from "react-router-dom";

const CreateButton = () => {
    return(
        <Link to={`/create`} className={'simplePokemon'}>
            <div className="pokeIdCreate"><span>#000</span></div>
            <div className="imgContainer"><img className="pokeImg" src={'/Referencias/colorPokeball.png'} alt="#"/></div>
            <div className="spanCreate"><span>Crear</span></div>
        </Link>
    )
}

export default CreateButton