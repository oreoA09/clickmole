import React, { useEffect } from "react";
import mole from './images/mole.png';

function Mole(props){

    useEffect(() =>{
        let randomSeconds = Math.ceil(Math.random() * 6000);
        
        let timer = setTimeout(()=>{
            props.setDisplayMole(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    
    return (
        <div>
            <img src={mole} alt="Mole" width={200} onClick={props.moleClicked}/>
        </div>
    )
}

export default Mole