import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";

const CreateButton = () => {
    return(
        <Link to={`/create`} className={'create'}>
            <div><img className="pokeImg" src={`#`} alt="#"/></div>
            <div><span>Crear</span></div>
        </Link>
    )
}

export default CreateButton