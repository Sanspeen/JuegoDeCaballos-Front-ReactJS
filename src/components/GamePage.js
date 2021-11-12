import React, { useState } from 'react';
import horse from "../media/horse.png"


export default function GamePage(props) {
    let desplazamiento1 = 0
    let desplazamiento2 = 0
    let desplazamiento3 = 0
    let desplazamiento4 = 0
    let desplazamiento5 = 0
    let desplazamiento6 = 0
    

    const handleTurn = () =>{

        switch (props.game.selectedTrack) {
            case "0":
                desplazamiento1 = props.horsesPosition[0].movement + Math.random() * (100 - 20) + 20;
                desplazamiento2 = props.horsesPosition[1].movement + Math.random() * (100 - 20) + 20;
                desplazamiento3 = props.horsesPosition[2].movement + Math.random() * (100 - 20) + 20;
                document.getElementById("horse1").style.margin = "0px " + desplazamiento1 + "px"
                document.getElementById("horse2").style.margin = "0px " + desplazamiento2 + "px"
                document.getElementById("horse3").style.margin = "0px " + desplazamiento3 + "px"
                props.setHorsesPosition([
                    {
                        "movement": desplazamiento1
                    },
                    {
                        "movement": desplazamiento2
                    },
                    {
                        "movement": desplazamiento3
                    }
                ])
        
                break;

            case "1":

                desplazamiento1 = props.horsesPosition[0].movement + Math.random() * (100 - 20) + 20;
                desplazamiento2 = props.horsesPosition[1].movement + Math.random() * (100 - 20) + 20;
                desplazamiento3 = props.horsesPosition[2].movement + Math.random() * (100 - 20) + 20;
                desplazamiento4 = props.horsesPosition[3].movement + Math.random() * (100 - 20) + 20;
                desplazamiento5 = props.horsesPosition[4].movement + Math.random() * (100 - 20) + 20;
                document.getElementById("horse1").style.margin = "0px " + desplazamiento1 + "px"
                document.getElementById("horse2").style.margin = "0px " + desplazamiento2 + "px"
                document.getElementById("horse3").style.margin = "0px " + desplazamiento3 + "px"
                document.getElementById("horse4").style.margin = "0px " + desplazamiento4 + "px"
                document.getElementById("horse5").style.margin = "0px " + desplazamiento5 + "px"
                props.setHorsesPosition([
                    {
                        "movement": desplazamiento1
                    },
                    {
                        "movement": desplazamiento2
                    },
                    {
                        "movement": desplazamiento3
                    },
                    {
                        "movement": desplazamiento4
                    },
                    {
                        "movement": desplazamiento5
                    }
                ])
        
                break;
            
            case "2":
                desplazamiento1 = props.horsesPosition[0].movement + Math.random() * (100 - 20) + 20;
                desplazamiento2 = props.horsesPosition[1].movement + Math.random() * (100 - 20) + 20;
                desplazamiento3 = props.horsesPosition[2].movement + Math.random() * (100 - 20) + 20;
                desplazamiento4 = props.horsesPosition[3].movement + Math.random() * (100 - 20) + 20;
                desplazamiento5 = props.horsesPosition[4].movement + Math.random() * (100 - 20) + 20;
                desplazamiento6 = props.horsesPosition[5].movement + Math.random() * (100 - 20) + 20;

                document.getElementById("horse1").style.margin = "0px " + desplazamiento1 + "px"
                document.getElementById("horse2").style.margin = "0px " + desplazamiento2 + "px"
                document.getElementById("horse3").style.margin = "0px " + desplazamiento3 + "px"
                document.getElementById("horse4").style.margin = "0px " + desplazamiento4 + "px"
                document.getElementById("horse5").style.margin = "0px " + desplazamiento5 + "px"
                document.getElementById("horse6").style.margin = "0px " + desplazamiento5 + "px"
                props.setHorsesPosition([
                    {
                        "movement": desplazamiento1
                    },
                    {
                        "movement": desplazamiento2
                    },
                    {
                        "movement": desplazamiento3
                    },
                    {
                        "movement": desplazamiento4
                    },
                    {
                        "movement": desplazamiento5
                    },
                    {
                        "movement": desplazamiento6
                    }
                ])
                break;

            default:
                break;
        }
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
