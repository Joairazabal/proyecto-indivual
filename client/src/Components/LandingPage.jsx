import React from "react";
import { Link } from "react-router-dom";


export default function LadingPage(){
    return(
        <div className="app">
          <Link to='/home'><button>Ingresar</button></Link>
        </div>
    )
}