 import React from "react";
 import { Link } from "react-router-dom";
 import SearchPokemon from "../SearchBar/SearchBar";
 import logo from '../../build/glogo.png'
 import './NavBar.css'
 export default function NavBar(){
     return(
    <div className="navBar">
      <Link to='/home'>
      </Link>
      <div className="mid">
      <a href="/home">Home</a>
      <div>
      <SearchPokemon />
      </div>
      </div>
      <a href="/pokemons">Create you pokemon</a>
    </div>
     )
 }
