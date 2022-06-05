import React from "react";
import { Link } from "react-router-dom";
import pikachu from '../../build/pikachu.png'
import video from '../../build/videoLanding.mp4'
import './Landing.css'


export default function LadingPage(){
    return(
       
            
        <div className="landing">
            
        <video className="video" src={video} autoPlay muted loop/>   
         <div className="contain">
         <h1 className="titulo">HELLO, THIS IS</h1>
          <Link to='/home'>
              <button className="btn">Open</button>
          </Link> 
         <h1> MY POKEMON PI </h1>
         </div>
    
        </div>
    
    )
}