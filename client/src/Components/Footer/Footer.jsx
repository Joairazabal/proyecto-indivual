import React from "react";
import './Footer.css'
import git from '../../build/github.png'
import linkedin from '../../build/linkedin.png'

export default function Footer(){
return(
    <div className="container_footer">
        <div className="contain_footer">
        <div className="github">
            <img classname='git' src={git} alt="github" height={'30px'}/>
            <a className="name_footer" href="https://github.com/Joairazabal">Github</a>
        </div>
        <div className="github">
            
            <img src={linkedin} alt="" height={'30px'}/>
            <a href="https://www.linkedin.com/in/joaquin-irazabal/">Linkedin</a>
            
           
        </div>

        </div>

    </div>
)
}