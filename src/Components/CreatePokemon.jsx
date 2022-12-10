import React, { useEffect, useState }  from "react";

const CreatePokemon = () => {
    return(
        <form action="">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" />

            <label htmlFor="img">img</label>
            <input name="img" type="text" />

            <label htmlFor="weight">weight</label>
            <input name="weight" type="text" />

            <label htmlFor="height">height</label>
            <input name="height" type="text" />

            <label htmlFor="description">description</label>
            <input name="description" type="text" />

            <label htmlFor="hp">hp</label>
            <input name="hp" type="text" />

            <label htmlFor="atk">atk</label>
            <input name="atk" type="text" />

            <label htmlFor="def">def</label>
            <input name="def" type="text" />
            
            <label htmlFor="satk">satk</label>
            <input name="satk" type="text" />

            <label htmlFor="sdef">sdef</label>
            <input name="sdef" type="text" />

            <label htmlFor="spd">spd</label>
            <input name="spd" type="text" />
            <div>
                <span>Select movements</span>
                <select></select>
                <select></select>
            </div>
            <div>
                <span>Select types</span>
                <select></select>
                <select></select>
            </div>
            <button>Create</button>
        </form>
    )
} 

export default CreatePokemon