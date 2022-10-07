import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokeCard = (props) => {
  const [pokeId, setPokeId] = useState();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    setPokeId(props.list.find((element) => element.id == id));
    
  }, [props.list]);

  return (
    <div className="pokeCardOnly">
      {pokeId && (
        <React.Fragment>
          <div>
            <div>
              <img src="/Referencias/arrow-left.svg" />
            </div>
            <span>{pokeId.name}</span>
          </div>
          <div>{pokeId.id}</div>
          <img src={`Referencias/${pokeId.name}.png`}/>
          <div>
            
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default PokeCard;
