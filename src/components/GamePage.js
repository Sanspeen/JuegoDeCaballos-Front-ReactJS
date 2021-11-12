import React, { useState } from 'react';
import horse from "../media/horse.png"


export default function GamePage(props) {

    let desplazamiento = "0px 100px"

    const handleTurn = () =>{
        console.log(desplazamiento)
        document.getElementById("horse1").style.margin = desplazamiento
        document.getElementById("horse2").style.margin = desplazamiento
        document.getElementById("horse3").style.margin = desplazamiento
        document.getElementById("horse4").style.margin = desplazamiento
        document.getElementById("horse5").style.margin = desplazamiento
        document.getElementById("horse6").style.margin = desplazamiento
        
        props.setHorsesPosition([
            {
                "movement": props.horsesPosition[0].movement = desplazamiento
            },
            {
                "movement": props.horsesPosition[1].movement = desplazamiento
            },
            {
                "movement": props.horsesPosition[2].movement = desplazamiento
            },
            {
                "movement": props.horsesPosition[3].movement = desplazamiento
            },
            {
                "movement": props.horsesPosition[4].movement = desplazamiento
            },
            {
                "movement": props.horsesPosition[5].movement = desplazamiento
            }
        ])

        console.log(props.horsesPosition)
    
    
    }

    return (
        <div className = "game">
            <h1>¡LA CARRERA HA COMENZADO!</h1>
            <div className  = "track">
                {
                    props.tracks[props.game.selectedTrack].carriels.map((i)=>(
                        <>
                            <img src = {horse} id = {"horse" + i}/>
                            <hr key = {i} id = "carriels"></hr>
                        </>
                        
                    ))
                } 
            </div>
            <button className="btn btn-light" onClick = {handleTurn}>Lanzar dado</button>
        </div>
    )
}
