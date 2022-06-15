
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { postPokemon,getTypes } from "../../redux/actions";
import { useDispatch,useSelector } from 'react-redux';
import NavBar from "../NavBar/NavBar";
import  './Create.css';
import Footer from '../Footer/Footer';

//creo una function que va a validar cada input pasandole como parametros los inputs

function validate({
  name,
  hp,
  attack,
  defense,
  speed,
  weight,
  height,
  img,
  type,
}) {
  //creo una const que se va a guardar todos los errors
    const errors = {};
    //const regEx = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;


  //validaciones para name
  if (!name) {
    errors.name = <b>Enter name ❌</b>;
    ///^[a-zA-Z\s]*$/ solamente permite letras
  } else if (!/^[a-zA-Z\s]*$/.test(name)){ 
      errors.name = <b>Characters are not allowed ❌</b>
      //me guardo un error de name y asi con los demas
  }
  
   //Validaciones para type
   if (!type.length) {
      errors.type = <b>Must choose a pokemon type ❌</b>
    }else if(type.length > 2){
          <b>Only can choose two pokemon type ❌</b>
    }
    
   //Valaciones para hp
  if (!hp || hp < 10 || hp > 100) {
      if (!hp) errors.hp = <b>Enter hp❌</b>
      else if (hp < 10) errors.hp = <b>10 hp min</b>
      else if (hp > 100) errors.hp = <b>100 hp max</b>

    } 

    //validacioes para img
     if (!img) errors.image = <b>Enter image ❌</b>;
    else if (!/(http(s?)):\/\//i.test(img)) errors.image = <b>Enter url format❌</b>;

    //validacioes para attack
     if (!attack || attack < 10 || attack > 100) {
      if (!attack) errors.attack = <b>Enter attack❌</b>
      else if (attack < 10) errors.attack = <b>your pokemon wouldn't kill a fly, try with 10 attack min</b>
      else if (attack > 100) errors.attack = <b>your pokemon could be very dangerous, try with 100 attack max</b>

    }
    //validacioes para defense
     if (!defense || defense < 10 || defense > 100) {
      if (!defense) errors.defense = <b>Enter defense❌</b>
      else if (defense < 10) errors.defense = <b>your pokemon could catch a cold easily, try with 10 defense min</b>
      else if (defense > 100) errors.defense = <b>that would be harder than a wall, try with 100 defense max</b>
    }
    //validacioes para speed
   if (!speed || speed < 10 || speed > 100) {
      if (!speed) errors.speed = <b>Enter speed❌</b>
      else if (speed < 10) errors.speed = <b>your pokemon will be late for all the battles, try with 10 speed min</b>
      else if (speed > 100) errors.speed = <b>your pokemon is faster than flash, try with 100 speed max</b>
    }
    //validacioes para height
     if (!height || height < 10 || height > 100) {
      if (!height) errors.height = <b>Enter height❌</b>
      else if (height < 10) errors.height = <b>watch where you walk, you could step on your little pokemon, try with 10 height min</b>
      else if (height > 100) errors.height = <b>your pokemon is taller than a building, try with 100 height max</b>
    }
    //validacioes para weight
     if (!weight || weight < 10 || weight > 100) {
      if (!weight) errors.weight = <b>Enter weight❌</b>
      else if (weight < 10) errors.weight = <b>you should feed your pokemon better, try with 10 weight min</b>
      else if (weight > 100) errors.weight = <b>definitely, your pokemon will not enter in the pokeball, try with 100 weight max</b>
    }

    else errors.name = <b>Wow, your pokemon looks great !! ✔️</b>
    return errors
  }

export default function PokemonCreate(){  
  const dispatch = useDispatch();
  const types = useSelector(state=>state.allTypes);
  const allPokemons= useSelector(state=> state.allPokemons)
  useEffect(()=>{
      dispatch(getTypes()) 
  },[dispatch])
  //creo dos estados locales
  const [errors, setErrors] = useState({});
  //creo el estado del pokemon a crear y le paso este objeto como parametro
  const [pokemon, setPokemon] = useState({
      name:'',
      hp:0,
      attack:0,
      defense:0,
      speed:0,
      height:0,
      weight:0,
      img:'',
      type: []
  })
  const { name, hp, attack, defense, speed, height, weight, img,type } = pokemon;

  
  const handleOnChange = (e)=>{
      e.preventDefault();
      setPokemon({
           ...pokemon,
          [e.target.name] : e.target.value
       })
      setErrors(validate({
       ...pokemon,
         [e.target.name] : e.target.value
      }))
 }

  const handleSelectChange = (e) =>{
      e.preventDefault();
      if (type.length >= 2) {
          alert('limit 2 types')
        }else if (type.length < 2) {
          setPokemon({
            ...pokemon,
            type: [...type, e.target.value]
          })
    
        }
  }

  let navigate = useHistory();

 
  const handleSubmit = (e) => {
      e.preventDefault();
      if (!/^[a-zA-Z\s]*$/.test(name)) {
          alert('Characters in name are not allowed')
        }
    
        else if (hp.length === 0 ||
          attack.length === 0 ||
          defense.length === 0 ||
          speed.length === 0 ||
          height.length === 0 ||
          weight.length === 0 ||
          type.length === 0) {
              alert('Please, fill out the blanks')
                 }
    
        else if (hp < 10 ||
          attack < 10 ||
          defense < 10 ||
          speed < 10 ||
          height < 10 ||
          weight < 10 ||
          hp > 100 ||
          attack > 100 ||
          defense > 100 ||
          speed > 100 ||
          height > 100 ||
          weight > 100
        ) {
            alert('Only number between 10 and 100 are allowed')
          
        }
    
        else if (/^[a-zA-Z\s]*$/.test(name) &&
          name.length &&
          hp.length &&
          img.length &&
          attack.length &&
          defense.length &&
          speed.length &&
          height.length &&
          weight.length &&
          type.length) {
          dispatch(postPokemon(pokemon))
          alert('successfully created!')

          setPokemon({
            name: '',
            hp: 0,
            img: '',
            attack: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
            type: []
          })
          navigate.push('/home')
        }
       
      }
  //CHECKEAR QUE SEAN INTEGER
  return (
      <div className='container_create' >
  
      <NavBar/> 
      
      <div className="formulario">
      <div >
      <h1 className='title_create'>Create your own pokemon!</h1>
        <div >
        </div>
      <form className="box_form" onSubmit={e=>handleSubmit(e)}>
        <div className="onePart">
          <div className='contain_input'>
          {errors.name && (<p>{errors.name}</p>)}
              <label>Name:</label>
              <input  className='form_input' type='text'  value={name} name='name' onChange={e=>handleOnChange(e)}/>
              
          </div>
          <div className='contain_input'>
              <label>hp:</label>
              <input className='form_input' type='number' placeholder='health point' value={hp} name='hp' onChange={e=>handleOnChange(e)}/>
              {errors.hp && (<p>{errors.hp}</p>)}
          </div>
          <div className='contain_input'>
              <label>attack:</label>
              <input className='form_input' type='number' placeholder='attack' value={attack} name='attack' onChange={e=>handleOnChange(e)}/>
              {errors.attack && (<p>{errors.attack}</p>)}
          </div>
          <div className='contain_input'>
              <label>defense:</label>
              <input className='form_input' type='number' placeholder='defense' value={defense} name='defense' onChange={e=>handleOnChange(e)}/>
              {errors.defense && (<p>{errors.defense}</p>)}
          </div>
          </div>
          <div className="two_part">
          <div className='contain_input'>
              <label>height:</label>
              <input className='form_input' type='number' placeholder='height' value={height} name='height'onChange={e=>handleOnChange(e)}/>
             {errors.height && (<p>{errors.height}</p>)}
          </div>
          <div className='contain_input'>
              <label>weight:</label>
              <input className='form_input' type='number' placeholder='weight' value={weight} name='weight' onChange={e=>handleOnChange(e)}/>
              {errors.weight && (<p>{errors.weight}</p>)}
          </div>
          <div className='contain_input'>
              <label>speed:</label>
              <input className='form_input' type='number' name='speed' value={speed} onChange={e=>handleOnChange(e)}/>
              {errors.speed && (<p>{errors.speed}</p>)}
          </div>

          <div className='contain_input'>
             <label>types:</label>
              <select className='tipes_create' onChange={e=>handleSelectChange(e)}>
              <option value="" selected disabled className="">add types</option>
              {types?.map(tipo=><option key={tipo.id} value={tipo.name}>{tipo.name}</option>)}
              </select>
          </div>
          <div className='contain_input'>
              <label>img:</label>
              <input className='form_input'  type='text' value={img} name='img'onChange={e=>handleOnChange(e)}/>
          </div>
          <div className="btt_create"><button className='btt' type='submit'> Create </button>
          </div>
          </div>
      </form>
      </div>
      </div>
      <div className='foter_create'>
      <Footer/>
      </div>
      </div>
  )
}