import React, { useState } from 'react'
import BetForm from './BetForm';



export default function HomeLogged(props) {

    const [carriels, setCarriels] = useState(-1);
    const [chosenCarriel, setChosenCarriel] = useState(-1)

    const handlerChargeCarriels = function(e) {
        const option = e.target.value;
        setCarriels(option);
        /*Vuelve a settear chosenCarriel a -1 cuando este tambien vuelve a esa posicion para evitar bugs*/
        if(option === -1){
            setChosenCarriel(option);
        }
    }

    const handlerChargeCarrielsChosen = function(e) {
        const optionCarrielChosen = e.target.value;
        setChosenCarriel(optionCarrielChosen);
    }

    return (
        <>
          <section className = "homeSection">
                <form className = "homeFormLogged">
                    <h1>Bienvenidos a carreras de caballos <br></br> señor {props.user.name}</h1>
                    <h6>Seleccione la pista en la que desea apostar</h6>
                    <select className = "form-select" onChange={handlerChargeCarriels}>
                        <option value={-1}>Seleccione una pista para jugar.</option>
                        {
                            props.tracks.map((item, i)=>(
                                <option key = {i} value={i}>{item.name}</option>
                            ))
                        }
                    </select>
                    <h6>Seleccione el carril al que apostará.</h6>
                    <select className = "form-select" onChange = {handlerChargeCarrielsChosen}>
                        <option value={-1}>Seleccione un carril para jugar.</option>
                        {
                            carriels > -1 &&
                            (
                                props.tracks[carriels].carriels.map((item, i)=>(
                                    <option key = {i} value={i}>{item}</option>
                                ))
                            )
                        }
                    </select>
                    {
                        (chosenCarriel > -1 && carriels > -1) ?
                            <BetForm isButtonDisabled = {true} tracks = {props.tracks} user = {props.user} setUser = {props.setUser}/>:
                            <BetForm isButtonDisabled = {false} />
                    }
                </form>
            </section>
        </>
    )
}
