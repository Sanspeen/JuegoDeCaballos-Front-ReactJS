import React from 'react'

export default function GamePage(props) {
    return (
        <div className = "game">
            <h1>¡LA CARRERA HA COMENZADO!</h1>
            <div className  = "track">
                {
                    props.tracks[props.game.selectedTrack].carriels.map((i)=>(
                        <hr key = {i} id = "carriels"></hr>
                    ))
                } 
            </div>
        </div>
    )
}
