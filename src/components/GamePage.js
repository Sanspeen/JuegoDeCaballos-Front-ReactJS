import React, { useState } from 'react';
import horse from "../media/horse.png"


export default function GamePage(props) {
    let desplazamiento1, desplazamiento2, desplazamiento3, desplazamiento4, desplazamiento5, desplazamiento6 = 0;
    const handleTurn = () =>{

        switch (props.game.selectedTrack) {
            case "0":
                document.getElementById("finishLine").style.margin = "0px " + props.game.tracks[props.game.selectedTrack].km + "px"
                console.log(props.game.tracks[props.game.selectedTrack].km)
                desplazamiento1 = props.horsesPosition[0].movement + Math.random() * (100 - 20) + 20;
                desplazamiento2 = props.horsesPosition[1].movement + Math.random() * (100 - 20) + 20;
                desplazamiento3 = props.horsesPosition[2].movement + Math.random() * (100 - 20) + 20;
                document.getElementById("horse1").style.margin = "0px " + desplazamiento1 + "px"
                if(desplazamiento1 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga1")
                }
                document.getElementById("horse2").style.margin = "0px " + desplazamiento2 + "px"
                if(desplazamiento2 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga2")
                }
                document.getElementById("horse3").style.margin = "0px " + desplazamiento3 + "px"
                if(desplazamiento1 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga3")
                }
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
                console.log(props.horsesPosition);
                break;

            case "1":
                document.getElementById("finishLine").style.margin = "0px " + props.game.tracks[props.game.selectedTrack].km + "px"
                desplazamiento1 = props.horsesPosition[0].movement + Math.random() * (100 - 20) + 20;
                desplazamiento2 = props.horsesPosition[1].movement + Math.random() * (100 - 20) + 20;
                desplazamiento3 = props.horsesPosition[2].movement + Math.random() * (100 - 20) + 20;
                desplazamiento4 = props.horsesPosition[3].movement + Math.random() * (100 - 20) + 20;
                desplazamiento5 = props.horsesPosition[4].movement + Math.random() * (100 - 20) + 20;
                document.getElementById("horse1").style.margin = "0px " + desplazamiento1 + "px"
                if(desplazamiento1 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga1")
                }
                document.getElementById("horse2").style.margin = "0px " + desplazamiento2 + "px"
                if(desplazamiento2 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga2")
                }
                document.getElementById("horse3").style.margin = "0px " + desplazamiento3 + "px"
                if(desplazamiento1 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga3")
                }
                document.getElementById("horse4").style.margin = "0px " + desplazamiento4 + "px"
                if(desplazamiento1 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga4")
                }
                document.getElementById("horse5").style.margin = "0px " + desplazamiento5 + "px"
                if(desplazamiento5 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga5")
                }
                
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
                document.getElementById("finishLine").style.margin = "0px " + props.game.tracks[props.game.selectedTrack].km + "px"
                desplazamiento1 = props.horsesPosition[0].movement + Math.random() * (100 - 20) + 20;
                desplazamiento2 = props.horsesPosition[1].movement + Math.random() * (100 - 20) + 20;
                desplazamiento3 = props.horsesPosition[2].movement + Math.random() * (100 - 20) + 20;
                desplazamiento4 = props.horsesPosition[3].movement + Math.random() * (100 - 20) + 20;
                desplazamiento5 = props.horsesPosition[4].movement + Math.random() * (100 - 20) + 20;
                desplazamiento6 = props.horsesPosition[5].movement + Math.random() * (100 - 20) + 20;
                document.getElementById("horse1").style.margin = "0px " + desplazamiento1 + "px"
                if(desplazamiento1 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga1")
                }
                document.getElementById("horse2").style.margin = "0px " + desplazamiento2 + "px"
                if(desplazamiento2 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga2")
                }
                document.getElementById("horse3").style.margin = "0px " + desplazamiento3 + "px"
                if(desplazamiento1 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga3")
                }
                document.getElementById("horse4").style.margin = "0px " + desplazamiento4 + "px"
                if(desplazamiento1 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga4")
                }
                document.getElementById("horse5").style.margin = "0px " + desplazamiento5 + "px"
                if(desplazamiento5 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga5")
                }
                document.getElementById("horse6").style.margin = "0px " + desplazamiento5 + "px"
                if(desplazamiento6 >= props.game.tracks[props.game.selectedTrack].km){
                    alert("omaiga6")
                }
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
                <hr id = "finishLine"></hr> 
            </div>
            <button className="btn btn-light" onClick = {handleTurn}>Lanzar dado</button>
        </div>
    )
}
