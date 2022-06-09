import React from "react";
import  s from'./Paginado.module.css'
// me traigo las props como parametro desde el otro componente
export default function Paginado({ pokemonsPerPage, allPokemons, paginado, currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav className={s.page}>
        <ul className= {s.paginado} >
          {pageNumbers &&
            pageNumbers.map(number => {
               return <li className={s.buttonpage}>
             <button className={number===currentPage?s.btn_active:s.btn_current} onClick={() => paginado(number)}>
               {number}
                </button>
              </li>
            })}
        </ul>
      </nav>
    );
  }