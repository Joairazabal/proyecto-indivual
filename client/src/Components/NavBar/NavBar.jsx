 import React from "react";
 import SearchPokemon from "../SearchBar/SearchBar";
 import './NavBar.css'
 export default function NavBar(){
     return(
    <div className="navBar">
      <a href="/home">PokeNise</a>
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
