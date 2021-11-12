import React, { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function BetForm(props) {

    const money = useRef();

    let carriel = parseInt(props.chosenCarriel) + 1; 
    const handleGame = () =>{
        props.setUser({"id": props.user.id, "email": props.user.email, "name": props.user.name, "betCarriel":  carriel, "money": money.current.value});
        props.setGame({"gameId": uuidv4(), "tracks": props.tracks, "user": props.user, "inGame": true, "selectedTrack": props.chosenTrack});
        
    }

    return (
        <>
                

            {
                props.isButtonDisabled ? 
                <>
                        <h6>Ingrese la suma de dinero que apostará.</h6>
                        <input type = "number"  placeholder = "Dinero" class="form-control" ref = {money}></input>
                        <Link to = "/game"><button type = "button" className="btn btn-dark" onClick = {handleGame}>Iniciar juego!</button></Link>
                </>:<>
                    <h6>Ingrese la suma de dinero que apostará.</h6>
                    <input placeholder = "Dinero" class="form-control" ref = {money}></input>
                    <button className="btn btn-dark" disabled>Iniciar juego!</button>          
                    
                </>
            }
        
        </>
    )
}
