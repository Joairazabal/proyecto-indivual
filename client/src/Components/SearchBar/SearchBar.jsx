import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {getPokemonsName} from '../../redux/actions'
import './Search.css'
export default function SearchPokemon(){
    const dispatch= useDispatch();
    const [name,setName] = useState("");

    const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonsName(name))
  }
console.log(name)
  return (
    <div className="contains">
      <input
        className="search" type="text"
        onChange= {(e) => handleInputChange(e)}
        placeholder="Search pokemon..."
      />
      <button className ="boton" type="submit" onClick= {(e) => handleSubmit(e)}>Search</button>
    </div>
  );
}