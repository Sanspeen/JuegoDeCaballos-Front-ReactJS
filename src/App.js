import { Fragment } from "react/cjs/react.production.min";
import Home from "./pages/Home";
import { useState } from "react";


function App() {

  const [user, setUser] = useState();

  

  return (
    <Fragment>
      <Home user = {user}></Home>
      <br></br>
    </Fragment>
  );
}

export default App;
