import React, { useState } from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import getPokemons from '../actions';
import { Link } from "react-router-dom";
import  Card  from "./Card";
import Paginado from './Paginado';


export default function Home(){
    //nos guardamos el hook en dispatch para ir despachando las acciones
    const dispatch= useDispatch();
    //con useUselector nos traemos todo lo que esta en el estado de pokemons
    const allPokemons= useSelector((state)=> state.pokemons)
    const [currentPage, setCurrentpage]= useState(1);
    const [pokemonsPerPage, setPokemonsPerPage]= useState(6);
    const IndexOfLastPokemons = currentPage * pokemonsPerPage;
    const IndexOfFirstPokemons = IndexOfLastPokemons - pokemonsPerPage;
    const currentPokemons= allPokemons.slice(IndexOfFirstPokemons,IndexOfLastPokemons);

    const paginado = (pageNumber)=>{
        setCurrentpage(pageNumber);
    }

    useEffect(()=>{
        dispatch(getPokemons());
    },[])

    function handleClick(e){
        e.preverntDefault();
        dispatch(getPokemons());
    }

    return(
        <div>
            <Link to= '/pokemons'> crear personaje</Link>
         <h1>Pokemons</h1>
         <button onClick={e=> {handleClick(e)}}>
          volver a cargar los personajes   
         </button>
         <div>
             
            <h2>Order</h2>
            <select>
                 <option value="asd">Z-A</option>
                 <option value="desc">A-Z</option>
             </select>

               <h2>Filter</h2>   
                 <input type="checkbox" name="onlyPokemons">Only my Pokemons</input> 
                 <input type="checkbox" name="onlyOriginals">Only Originals </input>
        
                 <h2>Type</h2>
                 <select>
                     <option value="tipos">{tipos?.map((el) => (
                     <option value={el}>{el}</option>
                     ))}
                     </option>
                 </select>
         </div>
        <div>
        { allPokemons && allPokemons.map((el)=>{
           <Card name={el.name} img={el.img} type={el.type} />
        })}
         </div>
        </div>
        
    )
}
