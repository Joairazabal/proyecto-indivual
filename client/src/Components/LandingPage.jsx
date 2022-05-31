import React from "react";
import { Link } from "react-router-dom";


export default function LadingPage(){
    return(
        <div className="app">
          <h1>BIENVENIDOS A POKEMON {"(:"}</h1>
          <Link to='/home'><button>Ingresar</button></Link>
        </div>
    )
}