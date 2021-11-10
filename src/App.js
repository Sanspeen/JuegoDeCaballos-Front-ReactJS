import { Fragment } from "react/cjs/react.production.min";
import GoogleLogin from 'react-google-login';
import { useState } from "react";
import HomeLogged from "./components/HomeLoggedFolder/HomeLogged";

function App() {


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

  const [user, setUser] = useState(
    { 
      "id": "",
      "email": "",
      "name": "",
      "carriel": 0,
      "money":0
    });
    
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta.profileObj)
    setUser({"id": respuesta.profileObj.googleId, "email": respuesta.profileObj.email, "name": respuesta.profileObj.name, "carriel":  0, "money": 0});
    console.log(user)
  }



  return (
    <Fragment>

      {user.id === "" ?
        <>
          <section className = "homeSection">
                <form className = "homeForm">
                    <h1>Bienvenidos a carreras de caballos</h1>
                    <h3>Inicia sesion con google para jugar</h3>
                    <GoogleLogin className = "enterWithGoogle"
                        clientId="230300571132-kh8b7curlmciegil8uli8m87f3pfh41r.apps.googleusercontent.com"
                        buttonText="Inciar Sesion"
                        onSuccess={respuestaGoogle}
                        onFailure={respuestaGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
            </section>
        </> : 
          <HomeLogged user = {user} tracks = {tracks} setUser = {setUser}/>
      }
    </Fragment>

  );
}

export default App;
