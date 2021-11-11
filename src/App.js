import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";
import HomeLogged from "./components/HomeLoggedFolder/HomeLogged";
import Home from "./components/Home";
import GamePage from "./components/GamePage";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  /*Crear estructura de datos del juego*/


  const tracks = [
    {
        "name": "Pista de hielo",
        "carriels": [1, 2, 3],
        "km": 3
    },
    {
        "name": "Pista las estrellas",
        "carriels": [1, 2, 3, 4, 5],
        "km": 4
    },
    {
        "name": "Pista me este es mi ultimo WIII!",
        "carriels": [1, 2, 3, 4, 5, 6, 7],
        "km": 5,
    }
  ]

  const [user, setUser] = useState(
    { 
      "id": "",
      "email": "",
      "name": "",
      "betCarriel": 0,
      "money":0
    });
    
  return (
    <Router>
      <Routes>
        {user.id === "" ?
          <Route path = "/" element={<Home setUser = {setUser}></Home>}></Route>: 
          <Route exact path = "/" element={<HomeLogged user = {user} tracks = {tracks} setUser = {setUser}/>}></Route>
        }
        <Route path = "hola" element={<GamePage setUser = {setUser}></GamePage>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
