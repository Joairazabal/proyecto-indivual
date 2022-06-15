import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {detail, getClean} from "../../redux/actions"
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './Detail.css'
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
export default function Detail() {
  const dispatch = useDispatch();
  const {id}= useParams();

   useEffect(()=>{
   dispatch(detail(id))
   dispatch(getClean())
 },[dispatch,id])

const myPokemon= useSelector((state)=>state.detail)


console.log(myPokemon)
return(
  <div className="detail">
    
    <NavBar/>
    
    <div className="box_max">
    <div className="box">
     {myPokemon.type?.length>0?
    <div className="inBox">
      <div className="poke">
    <h1 className="name"> {myPokemon.name}</h1>
      <img src={myPokemon.img} alt="" className="pk"/>
      <div className="containTypes">

   { myPokemon?myPokemon.type.map(t=><p className="types" key={t}> 
   {t}</p>): <p>error</p> }
   </div>
      </div>
      <div className="detalles">
     
      {typeof myPokemon.id === "number"?<h1 className="id">ID:{myPokemon.id}</h1>: null}
    <span className="hp">❤️Hp: {myPokemon.hp}</span>
    <span>⚔️Attack: {myPokemon.attack}</span>
    <span>  🛡️ Defense: {myPokemon.defense}</span>
    <span>📏Height: {myPokemon.height}</span>
    <span>⚖️Weight: {myPokemon.weight}</span>
    <span>⚡Speed: {myPokemon.speed}</span>
    </div>
    </div>:<div className="body_create"><Loading/></div>
}
  </div>
  </div>
  <div className="footer_detail">
  <Footer/>
  </div>
  </div>
)

}