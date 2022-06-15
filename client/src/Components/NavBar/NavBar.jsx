 import React from "react";
 import SearchPokemon from "../SearchBar/SearchBar";
 import './NavBar.css'
 export default function NavBar(){
     return(
    <div className="contain_nav">
      <div className="mid">
      <a className="home" href="/home">Home</a>
      </div>
      <div className="searchh">
      <SearchPokemon />
      </div>
      <div className="create">
      <a className="create" href="/pokemons">Create you pokemon</a>
      </div>
    </div>
     )
 }
