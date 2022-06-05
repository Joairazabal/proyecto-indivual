import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {detail} from "../../redux/actions"
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
export default function Detail() {
  const dispatch = useDispatch();
  const {id}= useParams();

   useEffect(()=>{
   dispatch(detail(id))
 },[dispatch,id])

const myPokemon= useSelector((state)=>state.allDetail)
console.log(myPokemon)
return(
  <div>
    <NavBar/>
     {myPokemon.id?
    <div>
    <h1>{myPokemon.name}</h1>
    <img src={myPokemon.img} alt="" />
    <span>{myPokemon.hp}</span>
    <span>{myPokemon.attack}</span>
    <span>{myPokemon.defense}</span>
    <span>{myPokemon.height}</span>
    <span>{myPokemon.weight}</span>
    <span>{myPokemon.speed}</span>
   {myPokemon && myPokemon?myPokemon.type.map(t=><p key={t}>{t}</p>): <p>error</p>}
    </div>:<p>Loading...</p>
    } 
  </div>

)

}