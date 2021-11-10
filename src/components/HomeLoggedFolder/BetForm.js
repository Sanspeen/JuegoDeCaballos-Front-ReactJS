import React, { useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

export default function BetForm(props) {

    const money = useRef();

    const handleGame = () =>{
        props.setUser({"id": props.user.id, "email": props.user.email, "name": props.user.name, "carriel":  0, "money": money.current.value});
    }

    return (
        <>
            {
                props.isButtonDisabled ? 
                <>
                        <h6>Ingrese la suma de dinero que apostará.</h6>
                        <input type = "number"  placeholder = "Dinero" class="form-control" ref = {money}></input>
                        <button type = "button" className="btn btn-dark" onClick = {handleGame}>Iniciar juego!</button>
                </>:<>
                    
                    <h6>Ingrese la suma de dinero que apostará.</h6>
                    <input placeholder = "Dinero" class="form-control" ref = {money}></input>
                    <button className="btn btn-dark" disabled>Iniciar juego!</button>          
                    
                </>
            }
        
        </>
    )
}
