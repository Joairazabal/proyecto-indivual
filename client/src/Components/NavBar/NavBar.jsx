 import React from "react";
 import { Link } from "react-router-dom";
 import SearchPokemon from "../SearchBar/SearchBar";
 import './NavBar.css'
 export default function NavBar(){
     return(
    <div className="navBar">
      <Link to='/home'>
      {/* <img className='logo' src="https://fontmeme.com/temporary/9cff8b797673fb1160bfd21c03b95a66.png" alt="logo" */}
      {/* height={'45px'} /> */}
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
