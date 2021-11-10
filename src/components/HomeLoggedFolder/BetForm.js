import React from 'react'

export default function BetForm(isButtonDisabled) {
    return (
        <>
            {
                isButtonDisabled.isButtonDisabled ? 
                <>
                    <h6>Ingrese la suma de dinero que apostará.</h6>
                    <input placeholder = "Dinero"></input>
                    <button >Iniciar juego!</button>
                </>:<>
                    <h6>Ingrese la suma de dinero que apostará.</h6>
                    <input placeholder = "Dinero"></input>
                    <button disabled>Iniciar juego!</button>
                </>

            }
        
        </>
        
    )
}
