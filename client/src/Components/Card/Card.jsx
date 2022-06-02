import React from "react";


export default function Card({ name, img, type }) {
    return(
  <div>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      <img src={img} alt="imagen" className="img" width="300px" height="200px" />
    </div>
    <div>
      {type.map(el => (
        <h2>{el}</h2>
      ))}
    </div>
  </div>
  )
} 