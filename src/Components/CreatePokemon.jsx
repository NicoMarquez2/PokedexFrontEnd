import React, { useEffect, useState }  from "react";
import { json, Link, redirect, useNavigate } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';

const url = 'http://localhost:8080/pokemon'  

const typeOptions = [
    {name: "Ice" , id: 1},
    {name: "Dark" , id: 2},
    {name: "Fairy" , id: 3},
    {name: "Fighting" , id: 4},
    {name: "Ground" , id: 5},
    {name: "Dragon" , id: 6},
    {name: "Rock" , id: 7},
    {name: "Water" , id: 8},
    {name: "Electric", id: 9},
    {name: "Pyschic", id: 10},
    {name: "Ghost", id: 11},
    {name: "Normal", id: 12},
    {name: "Fire", id: 13},
    {name: "Bug", id: 14},
    {name: "Grass", id: 15},
    {name: "Steel", id: 16},
    {name: "Poison", id: 17},
    {name: "Flying", id: 18}
  ];
  const movementsOptions = [
    {name: "Razor-wind" , id: 1},
    {name: "Pound" , id: 2},
    {name: "Gust" , id: 3},
    {name: "Mega-punch" , id: 4},
    {name: "Transform" , id: 5},
    {name: "Fire-punch" , id: 6},
    {name: "Ice-punch" , id: 7},
    {name: "Pay-day" , id: 8},
    {name: "Swords-dance", id: 9}
  ];

const CreatePokemon = () => {
    let navigate = useNavigate()
    const [validUser, setValidUser] = useState(false)
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
    const [message, setMessage] = useState("")


    /*const onSelect = (selectedList, selectedItem) => {
  
    }
    const onRemove = (selectedList, removedItem) => {
      
    }*/

    useEffect(() => {
      if(!localStorage.userToken){
        console.log("NO USER")
        navigate('/')
      }
    },[])

    function isValidStat(number){
      if(number > 255) return false
      else return true
    }

    function isValidWeightHeight(number){
      if(number){
        return true
      } else {
        return false
      } 
    }

    function selectsNotEmpty(selects){
      if(selects) return true
      else return false
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
        if(isValidStat(hp) && isValidStat(atk) && isValidStat(def) && 
          isValidStat(satk) && isValidStat(sdef) && isValidStat(spd)){
            console.log("entro primer if")
            if(isValidWeightHeight(weight) && isValidWeightHeight(height)){
              console.log("entro segundo if")
              if(selectsNotEmpty(types[0]) && selectsNotEmpty(movements[0])){
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
                  let pokemonTypes = types
                  let pokemonMovements = movements
      
                  await fetch(url,{
                    method: 'POST',
                    body: JSON.stringify({pokemon, pokemonTypes, pokemonMovements}),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'UserId': localStorage.getItem('userId'),
                        'Autorithation': localStorage.getItem('userToken')
                    }
                  })
              } else {
                setMessage('Types or movements cant be empty')
              }              
            } else {
              setMessage('El peso o altura no puede ser vacío')
            }           
        } else {
          setMessage('El valor de las stats no puede ser mayor a 255')
        }    
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
              <input name="Name" type="text" maxLength={16} onChange={handleName}/>

              <label htmlFor="img">IMG URL</label>
              <input name="img" type="text" onChange={handleImg}/>

              <label htmlFor="description">DESCRIPTION</label>
              <textarea className="textDescription" name="description" type="text" maxLength={255} onChange={handleDescription}/>
            </div>

            <div className="numbers">
              <label  htmlFor="weight">WEIGHT</label>
              <input className="number1" name="weight" type="number" onChange={handleWeight}/>

              <label  htmlFor="height">HEIGHT</label>
              <input className="number2" name="height" type="number" onChange={handleHeight}/>

              <label  htmlFor="hp">HP</label>
              <input className="number3" name="hp" type="number" onChange={handleHp}/>

              <label  htmlFor="atk">ATK</label>
              <input className="number4" name="atk" type="number" onChange={handleAtk}/>

              <label  htmlFor="def">DEF</label>
              <input className="number5" name="def" type="number" onChange={handleDef}/>
              
              <label  htmlFor="satk">SATK</label>
              <input className="number6" name="satk" type="number" onChange={handleSatk}/>

              <label  htmlFor="sdef">SDEF</label>
              <input className="number7" name="sdef" type="number" onChange={handleSdef}/>

              <label  htmlFor="spd">SPD</label>
              <input className="number8" name="spd" type="number" onChange={handleSpd}/>
            </div>

            <div className="select">
              <div className="selectT">
                <span>Select Types</span>
                <Multiselect
                  options={typeOptions}
                  onSelect={setTypes}
                  /*onRemove={onRemove}*/
                  displayValue="name"
                  selectionLimit="2"
                />
              </div>
              <div className="selectM">
                <span>Select Movements</span>
                <Multiselect
                  options={movementsOptions}
                  onSelect={setMovements}
                  /*onRemove={onRemove}*/
                  displayValue="name"
                  selectionLimit="2"
                />
              </div>

              
            </div>
            <button className="buttonCreate" type="button" onClick={handleButton}>Create</button>
        </form>
        {message ? <p>{message}</p> : <img className="imgCreate" src='/Referencias/colorPokeball.png'></img>}      
      </div>

    )
} 

export default CreatePokemon