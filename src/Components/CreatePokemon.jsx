import React, { useEffect, useState }  from "react";

const CreatePokemon = () => {
    
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [description, setDescription] = useState(0)
    const [hp, setHp] = useState(0)
    const [atk, setAtk] = useState(0)
    const [def, setDef] = useState(0)
    const [satk, setSatk] = useState(0)
    const [sdef, setSdef] = useState(0)
    const [spd, setSpd] = useState(0)


     const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
      }

      const handleImg = (e) => {
        e.preventDefault()
        setImg(e.target.value)
      }

      const handleWeight = (e) => {
        e.preventDefault()
        setWeight(e.target.value)
      }

      const handleHeight = (e) => {
        e.preventDefault()
        setHeight(e.target.value)
      }

      const handleDescription = (e) => {
        e.preventDefault()
        setDescription(e.target.value)
      }

      const handleHp = (e) => {
        e.preventDefault()
        setHp(e.target.value)
      }
      const handleAtk = (e) => {
        e.preventDefault()
        setAtk(e.target.value)
      }
      const handleDef = (e) => {
        e.preventDefault()
        setDef(e.target.value)
      }
      const handleSatk = (e) => {
        e.preventDefault()
        setSatk(e.target.value)
      }
      const handleSdef = (e) => {
        e.preventDefault()
        setSdef(e.target.value)
      }
      const handleSpd = (e) => {
        e.preventDefault()
        setSpd(e.target.value)
      }
      
      const handleButton = async () => {
        let pokemon = {
            name: name,
            img: img,
            description: description,
            weight: weight,
            height: height,
            hp: hp,
            atk: atk,
            def: def,
            satk: satk,
            sdef: sdef,
            spd: spd
        }
        console.log(pokemon)
      }

    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="name">Name</label>
            <input name="Name" type="text" onChange={handleName}/>

            <label htmlFor="img">img</label>
            <input name="img" type="text" onChange={handleImg}/>

            <label htmlFor="weight">weight</label>
            <input name="weight" type="text" onChange={handleWeight}/>

            <label htmlFor="height">height</label>
            <input name="height" type="text" onChange={handleHeight}/>

            <label htmlFor="description">description</label>
            <input name="description" type="text" onChange={handleDescription}/>

            <label htmlFor="hp">hp</label>
            <input name="hp" type="text" onChange={handleHp}/>

            <label htmlFor="atk">atk</label>
            <input name="atk" type="text" onChange={handleAtk}/>

            <label htmlFor="def">def</label>
            <input name="def" type="text" onChange={handleDef}/>
            
            <label htmlFor="satk">satk</label>
            <input name="satk" type="text" onChange={handleSatk}/>

            <label htmlFor="sdef">sdef</label>
            <input name="sdef" type="text" onChange={handleSdef}/>

            <label htmlFor="spd">spd</label>
            <input name="spd" type="text" onChange={handleSpd}/>
            <div>
                <span>Select movements</span>
                <select></select>
                <select></select>
            </div>
            <div>
                <span>Select types</span>
                <select>
                    <option value="">TIPO</option>
                </select>
                <select></select>
            </div>
            <button type="button" onClick={handleButton}>Create</button>
        </form>
    )
} 

export default CreatePokemon