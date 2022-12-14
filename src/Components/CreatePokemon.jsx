import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import {MultiSelect} from "react-multi-select-component"

const options = [
    {label: "Ice" , value: "Ice"},
    {label: "Dark" , value: "Dark"},
    {label: "Fairy" , value: "Fairy"},
    {label: "Fighting" , value: "Fighting"},
    {label: "Ground" , value: "Ground"},
    {label: "Dragon" , value: "Dragon"},
    {label: "Rock" , value: "Rock"},
    {label: "Water" , value:"Water"},
    {label: "Electric", value: "Electric"},
    {label: "Pyschic", value: "Pyschic"},
    {label: "Ghost", value: "Ghost"},
    {label: "Normal", value: "Normal"},
    {label: "Fire", value: "Fire"},
    {label: "Bug", value: "Bug"},
    {label: "Grass", value: "Grass"},
    {label: "Steel", value: "Steel"},
    {label: "Poison", value: "Poison"},
    {label: "Flying", value: "Flying"}
  ];

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
    const [types, setTypes] = useState([])
    const [movements, setMovements] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)

     
    
    useEffect(()=> {
        console.log(types)
        if (types.lenght > 2 ) setIsDisabled(true)
        console.log(isDisabled)
        },[types])

    const selectTypes= (opt) => {
      if (types.length > 2 ){
        return
      }else {
        let arr = types
        arr.push(opt[0].value)
        setTypes(arr)
      }
    }


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
      const handleTypes = (e) => {
        e.preventDefault()
        setTypes(e.target.value)
      }
      const handleMovements = (e) => {
        e.preventDefault()
        setMovements(e.target.value)
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
      <div className="createGeneral">
        <div className="authHeader">
                <Link to={"/"}><img src="/Referencias/arrow-left.svg" /></Link>
                <div>
                  <h1>Create Pokemon</h1>
                </div>
            </div>
        <form className="createForm" onSubmit={(e)=>e.preventDefault()}>
            <div className="letters">
              <label htmlFor="name">NAME</label>
              <input name="Name" type="text" onChange={handleName}/>

              <label htmlFor="img">IMG URL</label>
              <input name="img" type="text" onChange={handleImg}/>

              <label htmlFor="description">DESCRIPTION</label>
              <input name="description" type="text" onChange={handleDescription}/>
            </div>

            <div className="numbers">
              <label htmlFor="weight">WEIGHT</label>
              <input name="weight" type="text" onChange={handleWeight}/>

              <label htmlFor="height">HEIGHT</label>
              <input name="height" type="text" onChange={handleHeight}/>

              <label htmlFor="hp">HP</label>
              <input name="hp" type="text" onChange={handleHp}/>

              <label htmlFor="atk">ATK</label>
              <input name="atk" type="text" onChange={handleAtk}/>

              <label htmlFor="def">DEF</label>
              <input name="def" type="text" onChange={handleDef}/>
              
              <label htmlFor="satk">SATK</label>
              <input name="satk" type="text" onChange={handleSatk}/>

              <label htmlFor="sdef">SDEF</label>
              <input name="sdef" type="text" onChange={handleSdef}/>

              <label htmlFor="spd">SPD</label>
              <input name="spd" type="text" onChange={handleSpd}/>
            </div>

            <div>
              <div>
                <span>Select Types</span>
                <MultiSelect options = {options}
                  value={types}
                  onChange = {setTypes}
                  disabled = {(types.length > 2) ? true : false}
                  />
              </div>
              {/*<div>
                  <span >Select Movements</span>
                  <MultiSelect options = {options}
                    value={types}
                    onChange = {setTypes}
                    disabled = {isDisabled}
                    />
              </div>*/}

            </div>
            <button type="button" className="button" onClick={handleButton}>Create</button>
        </form>
      </div>

    )
} 

export default CreatePokemon