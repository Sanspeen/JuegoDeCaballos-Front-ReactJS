import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import GoogleLogin from 'react-google-login';

export default function UserForm() {
    const respuestaGoogle = (respuesta) => {
        console.log(respuesta);
      }

    return (
        <Fragment>
            <form className = "homeForm">
                <h1>Bienvenidos a carreras de caballos</h1>
                <GoogleLogin className = "enterWithGoogle"
                    clientId="230300571132-kh8b7curlmciegil8uli8m87f3pfh41r.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={respuestaGoogle}
                    onFailure={respuestaGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </form>
        </Fragment>
    )
}
