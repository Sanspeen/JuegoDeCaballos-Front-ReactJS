import { Fragment } from "react/cjs/react.production.min";
import GoogleLogin from 'react-google-login';
import { useState } from "react";
import HomeLogged from "./components/HomeLoggedFolder/HomeLogged";


function App() {


  const [user, setUser] = useState(
    { 
      "id": "",
      "email": "",
      "name": ""
    });
    
  const respuestaGoogle = (respuesta) => {
    setUser(respuesta.profileObj);
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
          <HomeLogged user = {user}/>
      }
    </Fragment>

  );
}

export default App;
