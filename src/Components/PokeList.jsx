import React, { useEffect, useState }  from "react";
import SimplePoke from "./SimplePoke";
import Header from "./Header";
import CreateButton from "./CreateButton";
import {Link, redirect} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const PokeList = (props) => {
  const [value, setValue] = useState("");
  const [order, setOrder] = useState("Letter");
  const [auxList,setAuxList] = useState([])
  let navigate = useNavigate('')

  const handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("userToken")
    navigate('/')
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  
  useEffect(()=>{
    if(order === "id"){
      props.list.sort((a,b)=> String(a.name).localeCompare(b.name))
    }

    else{
      props.list.sort((a,b)=> a.id - b.id)
    }
    setAuxList(Object.assign([],props.list))   
  },[order,props.list])

  function changeOrder(){
      setOrder((order === "id") ? "Letter" : "id")
    
  }

  return (
    <React.Fragment>
      {localStorage.userToken ? <button onClick={handleLogOut}>LOGOUT</button> : <Link to = {"/login"}><button>LOGIN</button></Link>}
      <div className="listComponent">
        <Header
          changeOrder={changeOrder}
          handleChange={handleChange}
          order={order}
        />
        <div className="mainList">
          {localStorage.userToken && (
            <CreateButton/>
          )}
          {auxList.filter((pokemon)=>pokemon.name.toLowerCase().includes(value.toLowerCase())).map((poke, index) => (
            <SimplePoke
              list={props.list}
              poke={poke}
              key={poke.id}
              getPokemon={props.getPokemon}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokeList;


/*
const [state, setState] = useState({
  name: '',
  
});

handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value })
}

<label htmlFor="name">Name</label>
<input name="name" type="text"
 onChange={this.handleChange}
  />

  */

  

