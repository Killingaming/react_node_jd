import {Link} from 'react-router-dom';
export default function Catch(props){
    return (
    <div>
        <h1>Attrapez Les Tous!</h1>
        <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/Catch">Pokemons</Link></li>
        </ul>
        </nav>
        <h2>You can see here the different pokemons in the area 👁👁</h2>
    </div>
)}