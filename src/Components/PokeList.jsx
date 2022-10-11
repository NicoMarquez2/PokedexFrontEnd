import React,{useState} from "react";
import SimplePoke from "./SimplePoke";
import Header from "./Header";


const PokeList = (props) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
    console.log(value);
  }

  return (
    <React.Fragment>
      <div className="listComponent">
        <Header
          changeOrder={props.changeOrder}
          handleChange={handleChange}
          order={props.order}
        />
        <div className="mainList">
          {props.list.filter((pokemon)=>pokemon.name.includes(value)).map((poke, key) => (
            <SimplePoke
              list={props.list}
              poke={poke}
              key={key}
              getPokemon={props.getPokemon}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokeList;
