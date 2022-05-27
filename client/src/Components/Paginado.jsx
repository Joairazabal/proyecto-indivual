import React from "react";
import getPokemons from "../actions";
export default function Paginado({pokemonsPerPage, allPokemons, paginado}){
const pagNumbers= [];
for(let i =0; i < Math.ceil(allPokemons/pokemonsPerPage);i++){
    pagNumbers.push(i+1)
}
return(
    <nav>
        <ul>
            { pagNumbers && pagNumbers.map((number) =>{
                <li className="numberPages" key={number}>
                <a onClick={()=> paginado(number)}>{number}</a>
            </li>
           
            })}
        </ul>
    </nav>
)
}