import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPokemons from "../../actions";
import { getTypes } from "../../actions";
import { Link } from "react-router-dom";
import Card from "../Card";
import Paginado from "../Paginado";
import SearchPokemon from "../SearchBar";

export default function Home() {
  //nos guardamos el hook en dispatch para ir despachando las acciones
  const dispatch = useDispatch();
  //con useUselector nos traemos todo lo que esta en el estado de pokemons
  const allPokemons = useSelector(state => state.pokemons);
  const types = useSelector(state => state.types);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <>
        <SearchPokemon />
      </>
      <button
        onClick={e => {
          handleClick(e);
        }}
      >
        volver a cargar los personajes
      </button>
      <div>
        <h2>Order</h2>
        <select>
          <option value="asd">Z-A</option>
          <option value="desc">A-Z</option>
        </select>

        <h2>Filter</h2>

        <select>
          <option value="asd">Only my Pokemons</option>
          <option value="desc">Only Originals</option>
        </select>

        <select name="" id="">
          <option>Elegi el Tipo</option>

          {types?.map(el => (
            <option value={el.name}>{el.name}</option>
          ))}
        </select>

        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          paginado={paginado}
        />
      </div>

      {currentPokemons?.map(el => {
        return (
          <>
            <Card name={el.name} img={el.img} type={el.type} key={el.id} />
          </>
        );
      })}
    </div>
  );
}
