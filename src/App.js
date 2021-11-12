/*Bienvenido coach :D*/
import { useState } from "react";
import HomeLogged from "./components/HomeLoggedFolder/HomeLogged";
import Home from "./components/Home";
import GamePage from "./components/GamePage";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [horsesPosition, setHorsesPosition] = useState([
    {
      "movement": 0
    },
    {
      "movement": 0
    },
    {
        "movement": 0
    },
    {
        "movement": 0
    },
    {
        "movement": 0
    },

    {
      "movement": 0
    }
      
  ]);

  const [game, setGame] = useState();

  const tracks = [
    {
        "name": "Pista de hielo",
        "carriels": [1, 2, 3],
        "km": 300
    },
    {
        "name": "Pista las estrellas",
        "carriels": [1, 2, 3, 4, 5],
        "km": 500
    },
    {
        "name": "Pista me este es mi ultimo WIII!",
        "carriels": [1, 2, 3, 4, 5, 6],
        "km": 600,
    }
  ]

  const [user, setUser] = useState( { "id": "" } );
    
  return (
    <Router>
      <Routes>
        {user.id === "" ?
          <Route path = "/" element={<Home setUser = {setUser} user = {user}></Home>}></Route>: 
          <Route exact path = "/" element={<HomeLogged user = {user} tracks = {tracks} setUser = {setUser} setGame = {setGame} game = {game}/> }></Route>
        }
        <Route path = "game" element={<GamePage game = {game} 
          user = {user} 
          setUser = {setUser} 
          tracks = {tracks} 
          horsesPosition = {horsesPosition} 
          setHorsesPosition = {setHorsesPosition}>
        </GamePage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
