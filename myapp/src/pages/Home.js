import {Link} from 'react-router-dom';
import * as React from 'react';


function Navbar() {
  return <div></div>
}


export default function MyApp() {
  return (
    <div>
      <div classname="App">
        <Navbar />
      
      <h1>Welcome to Pokemon!!!</h1>
        <nav>
          <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/pokedex">Pokedex</Link></li>
              <li><Link to="/Catch">Catch</Link></li>
          </ul>
        </nav>
        </div>
      <h2>Here is a new world of creatures to discover and capture to make them YOURS and FIGHT to DEATH 😈!</h2>
    </div>
)}


/*import React, { useState, useEffect, getAll } from 'react';

export default function Home(props){
    return <h1>Welcome to your Pokemon World!</h1>
}

//function Counter(props){
    const [ pokemons, setPokemons ] = useState([]);

//   return <div>
//    <h2>{count}</h2>
//  <button onClick={()=>setCount(count+1)}>Count !</button>
//  </div>
//}

//va s'executer seulement au lancement du composant (dep: [])
useEffect(() => {
  // récupérer la liste des users seulement au chargement du composant ! 
  const pokemonsFetched = getAll();
  pokemonsFetched
    .then(result => setPokemons(result))
    .catch(error=>console.error("Erreur avec notre API :",error.message));
},[]); */