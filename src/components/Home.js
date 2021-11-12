import React, { useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login';

export default function Home(props) {
    const URL = "http://localhost:8080/";

    const fetchApiGetUserById = async () =>{
        const googleId = props.user.googleId;
        const response = await fetch(URL + googleId);
        const responseJSON = await response.json();
        props.setUser(responseJSON);
        
    }

    const fetchApiCreatePlayer = async () =>{
        const response = await fetch(`${URL}/createPlayer`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(props.user)
                }
            )
    }

    const respuestaGoogle = (respuesta) => {
        props.setUser({"id": respuesta.profileObj.googleId, "email": respuesta.profileObj.email, "name": respuesta.profileObj.name, "betCarriel":  0, "money": 0});
    }
    return (
        <>
            <section className = "homeSection">
                      <h1>¡CARRERAS DE CABALLOS!</h1>
                      <h3>Inicia sesion con google para jugar</h3>
                      <GoogleLogin className = "enterWithGoogle"
                          clientId="230300571132-kh8b7curlmciegil8uli8m87f3pfh41r.apps.googleusercontent.com"
                          buttonText="Inciar Sesion"
                          onSuccess={respuestaGoogle}
                          onFailure={respuestaGoogle}
                          cookiePolicy={'single_host_origin'}
                      ></GoogleLogin>
              </section>
        </>
    )
}
