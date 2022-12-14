import { Button } from "bootstrap";
import React, {useState, useEffect} from "react";
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <ul className="liste">
                <li className="items">Home</li>
                <li className="items">Pokemons</li>
                <li className="items">Pokedex</li>
            </ul>
            <button className="btn">Button</button>
        </nav>
    )
}