import {Link} from 'react-router-dom';
export default function Pokedex(props){
    return (
    <div>
        <h1>Pokedex</h1>
        <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/Catch">Catch</Link></li>
        </ul>
        </nav>
        <h2>Here you'll see your own Pokemon Collection WOW!</h2>
    </div>
    
)}

//Il faudrait que je teste quand c'est en marche le truc