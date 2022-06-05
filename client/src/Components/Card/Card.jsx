import React from "react";
import { Link } from "react-router-dom";
import'./Card.css'

export default function Card({ name, img, type,id }) {
  return(
<div className="container">
<Link to={`/home/${id}`}>
<h2 className="name">{name}</h2>
</Link> 
<img src={img} alt="imagen" className="img" width="100px" height="100px" />
 
  <div className="typeStyle">{type.map(el => (
    <h2>{el}</h2>
    ))}
</div>

</div>
)
} 