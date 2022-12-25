import React, { useEffect } from "react";
import moleHill from './images/molehill.png';


function EmptySlot(props) {
    useEffect(()=>{
        let randomSeconds = Math.ceil(Math.random() * 6000);
        let timer = setTimeout(()=>{
            props.setDisplayMole(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return(
        <div>
            <img src={moleHill} alt="Mole Hill" width={200} />
        </div>
    )
}

export default EmptySlot