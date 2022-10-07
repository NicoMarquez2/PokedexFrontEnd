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
    <React.Fragment>
      {pokeId && (
      <div className={`pokeCardOnly ${(typeof pokeId.type==="string") ? pokeId.type : pokeId.type[0]}`}>      
            <div className="cardTitle">
              <div>
                <img src="/Referencias/arrow-left.svg" />          
                <span>{pokeId.name}</span> 
              </div>       
              <div>{pokeId.id}</div>
            </div>

            <img src={`Referencias/${pokeId.name}.png`}/>
            
            <div className="pokeDescription">
                <div className="pokeType">
                  {(typeof pokeId.type==="string") ? 
                    <div><span>{pokeId.type}</span></div> :

                    <div>
                      <span className={`${pokeId.type[0]} lettersWhite`}>{pokeId.type[0]}</span>
                      <span className={`${pokeId.type[1]}`}>{pokeId.type[1]}</span>
                    </div>}                
                </div>
              
                <div className="pokeAbout">
                  <span className={`${pokeId.type} backgroundWhite`}>About</span>
                  <div className="pokeInfo">
                    <div>
                      <img src="/Referencias/Weight.svg" alt="#"/>
                      <span>{pokeId.weigth} Kg</span>
                      <span>Weight</span>
                    </div>
                    <div>
                      <img src="/Referencias/Height.svg" alt="#"/>
                      <span>{pokeId.height} m</span>  
                      <span>Height</span>
                    </div>

                    <div>
                    {(typeof pokeId.moves==="string") ? 
                    <div><span>{pokeId.moves}</span></div> :

                    <div className="prueba">
                      <span className={`${pokeId.moves[0]}`}>{pokeId.moves[0]}</span>
                      <span className={`${pokeId.moves[1]}`}>{pokeId.moves[1]}</span>
                    </div>}  
                    <span>Moves</span>            
                    </div>                          
                  </div>

                </div>

                <div className="pokeSummary">
                  <span>{pokeId.description}</span>
                </div>

                <div className="pokeStats">
                  <div><span className={`${pokeId.type} backgroundWhite`}>Base Stats</span></div>
                  <div>
                    <span className={`${pokeId.type} backgroundWhite`}>HP</span>
                    <span>{pokeId.hp}</span>
                    <div></div>
                  </div>
                  <div>
                    <span className={`${pokeId.type} backgroundWhite`}>ATK</span>
                    <span>{pokeId.atk}</span>
                  </div>
                  <div>
                    <span className={`${pokeId.type} backgroundWhite`}>DEF</span>
                    <span>{pokeId.def}</span>
                  </div>
                  <div>
                    <span className={`${pokeId.type} backgroundWhite`}>SATK</span>
                    <span>{pokeId.satk}</span>
                  </div>
                  <div>
                    <span className={`${pokeId.type} backgroundWhite`}>SDEF</span>
                    <span>{pokeId.sdef}</span>
                  </div>
                  <div>
                    <span className={`${pokeId.type} backgroundWhite`}>SPD</span>
                    <span>{pokeId.spd}</span>
                  </div>
                </div>
            </div>         
      </div>
      )}
    </React.Fragment>
  );
};

export default PokeCard;
