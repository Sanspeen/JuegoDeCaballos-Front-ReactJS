import React, { useState } from 'react'
import BetForm from './BetForm';

const tracks = [
    {
        "name": "Pista de hielo",
        "carriels": [1, 2, 3],
        "km": 10
    },
    {
        "name": "Pista las estrellas",
        "carriels": [1, 2, 3, 4, 5],
        "km": 20
    },
    {
        "name": "Pista me este es mi ultimo WIII!",
        "carriels": [1, 2, 3, 4, 5, 6, 7],
        "km": 30,
    }
]

export default function HomeLogged(user) {

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
                    <h1>Bienvenidos a carreras de caballos <br></br> señor {user.user.name}</h1>
                    <h6>Seleccione la pista en la que desea apostar</h6>
                    <select className = "chooseTrack" onChange={handlerChargeCarriels}>
                        <option value={-1}>Seleccione una pista para jugar.</option>
                        {
                            tracks.map((item, i)=>(
                                <option key = {i} value={i}>{item.name}</option>
                            ))
                        }
                    </select>
                    <h6>Seleccione el carril al que apostará.</h6>
                    <select className = "chooseCarriel" onChange = {handlerChargeCarrielsChosen}>
                        <option value={-1}>Seleccione un carril para jugar.</option>
                        {
                            carriels > -1 &&
                            (
                                tracks[carriels].carriels.map((item, i)=>(
                                    <option key = {i} value={i}>{item}</option>
                                ))
                            )
                        }
                    </select>
                    {
                        (chosenCarriel > -1 && carriels > -1) ?
                            <BetForm isButtonDisabled = {true} />:
                            <BetForm isButtonDisabled = {false} />
                    }
                </form>
            </section>
        </>
    )
}
