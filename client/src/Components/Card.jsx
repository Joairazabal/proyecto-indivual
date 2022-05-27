import React from "react";


export function Card(name, img,type){
    <div>
        <h2>{name}</h2>
        <img src={img} alt="img not found" width="50px" height="80px"  />
        {type.map((el)=>(<h2>{el.type.name}</h2>))}
    </div>
} 