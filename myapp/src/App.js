import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Catch from "./pages/Catch";
import Navbar from "./pages/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
export default function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> {/*ici on met l'URL dans le navigateur*/}
          <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/pokedex"> {/*ici on met l'URL dans le navigateur*/}
          <Pokedex /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/catch"> {/*ici on met l'URL dans le navigateur*/}
          <Catch /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
      </Switch>
  </Router>
}

//export default App;
