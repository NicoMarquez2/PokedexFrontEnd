import React from "react";

const ProgressBar = ({poke, stat})=>{
    
    const noProgress = {
        height: '5%',
        width: '35vh',
        backgroundColor: 'whitesmoke',
        borderRadius: '10%',
        margin: '10',
      }
      
      const progress = {
        height: '100%',
        width: `${(stat*100)/255}%`,
        borderRadius:'10px',
        margin : '10',
        textAlign: 'right'
      }

    return(
        <div style={noProgress} className='statsFlex'>

            
            <div style={progress} className={`${
                  typeof poke.type === "string"
                    ? poke.type
                    : poke.type[0]
                }`}>
            </div>
        </div>
    )
}

export default ProgressBar