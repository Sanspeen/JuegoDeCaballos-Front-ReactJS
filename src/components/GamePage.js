import React from 'react'

export default function GamePage(props) {
    return (
        <div className = "game">
            <div className  = "track">
                {
                    props.tracks[1].carriels.map((item, i)=>(
                        <hr className = "carriels"></hr>
                    ))
                } 
            </div>
        </div>
    )
}
