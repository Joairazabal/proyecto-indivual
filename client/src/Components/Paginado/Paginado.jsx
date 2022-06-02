import React from "react";
// me traigo las props como parametro desde el otro componente
export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul className='paginado' >
          {pageNumbers &&
            pageNumbers.map(number => {
               return <li>
             <button onClick={() => paginado(number)}>
               {number}
                </button>
              </li>
            })}
        </ul>
      </nav>
    );
  }