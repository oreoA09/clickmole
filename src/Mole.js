import React, { useEffect } from "react";

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
            <img src="../images/mole.png" alt="Mole" width={200} onClick={props.moleClicked}/>
        </div>
    )
}

export default Mole