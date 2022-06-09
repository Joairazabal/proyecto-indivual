import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPokemons, getTypes} from "../../redux/actions";
import { filterPokemonsByType, createFilterPokemon,Sort, filterByAttack } from "../../redux/actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import './Home.css'


export default function Home() {
  //nos guardamos el hook en dispatch para ir despachando las acciones
  const dispatch = useDispatch();
  //con useUselector nos traemos todo lo que esta en el estado de pokemons
  const allPokemons = useSelector(state => state.pokemons);
  const types = useSelector(state => state.types);
  const[order,setOrder]= useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon);

  const paginado = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
  dispatch(getPokemons());
  //  dispatch(getTypes());
  }, [dispatch]);

   function handleClick(e) {
     e.preventDefault();
    dispatch(getPokemons());
   }

  function handleFilterType(e) {
    e.preventDefault();
    dispatch(filterPokemonsByType(e.target.value));
  }

  function handleFilterCreate(e){
    e.preventDefault();
    dispatch(createFilterPokemon(e.target.value))
  }
  function onSelectsChange(e) {
    e.preventDefault();
    dispatch(Sort(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value} `)
  }
  function handleFilterByAttack(e){
    e.preventDefault();
    dispatch(filterByAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value} `)
  }


  return (
    
    <div className="containn">
     <NavBar/>
  
     <div className="order">
   <h2>Order</h2>
        <select onChange={e => onSelectsChange(e)} >
        <option> A-Z:</option>
            <option value="ASCENDENTE">Ascendente</option>
            <option value="DESCENDENTE">Descendente</option>
        </select>
        <select onChange={e => handleFilterByAttack(e)}>
            <option value="" selected disabled>By attack</option>
            <option value="Mayor fuerza">Mayor fuerza</option>
            <option value="Menor fuerza">Menor fuerza</option>
          </select>

        <h2>Filter</h2>

        <select onChange={e => handleFilterCreate(e)}>
          <option value="" selected disabled>pokemons</option>
          <option value='All'>All</option>
          <option value="created">Only my Pokemons</option>
          <option value="original">Only Originals</option>
        </select>

        <select  onChange={e => handleFilterType(e)}>
        <option value="" selected disabled className="">By types</option>
          <option value="All"> All</option>
          <option value="normal"> Normal </option>
          <option value="flying"> Flying </option>
          <option value="poison"> Poison </option>
          <option value="ground"> Ground </option>
          <option value="bug"> Bug </option>
          <option value="fire"> Fire </option>
          <option value="water"> Water </option>
          <option value="grass"> Grass </option>
          <option value="electric"> Electric </option>
          <option value="fairy"> Fairy </option>
          </select>
      </div>


      <div className="cards">
        
      {currentPokemons.length>0?currentPokemons.map(el => {
        return (
            <Card name={el.name} img={el.img} type={el.type} key={el.id} id={el.id} />

        )
      }):<div className="loading_home"><Loading/></div>}
      </div>
      <div className="pag">
      <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          paginado={paginado}
          currentPage={currentPage}
        />
        </div>
    </div>
  );
}
