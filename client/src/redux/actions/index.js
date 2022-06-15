import axios from 'axios'

export const GET_ALL_POKEMONS='GET_ALL_POKEMONS'
export const GET_TYPES='GET_TYPES'
export const GET_POKEMONS_NAME= 'GET_POKEMONS_NAME'
export const FILTER_BY_TYPE= "FILTER_BY_TYPE"
export const CREATE_FILTER= 'CREATE_FILTER'
export const SORT = "SORT"
export const FILTER_BY_ATTACK= 'FILTER_BY_ATTACK'
export const  GET_DETAILS=  "GET_DETAILS"

export function getPokemons(){
  return function(dispatch){
  axios.get("http://localhost:3001/pokemons",{}).then((info)=>dispatch({
   type: GET_ALL_POKEMONS,
   payload: info.data 
}))
}
}

export function getTypes(){
return async function(dispatch){
    var types= await axios.get("http://localhost:3001/types")
    return dispatch({
        type: GET_TYPES,
        payload: types.data
    })
}
}
export const getPokemonsName = (name) => {
    return async function (dispatch) {
        try {
          var json = await axios.get("http://localhost:3001/pokemons?name=" + name)
          return dispatch({
            type: GET_POKEMONS_NAME,
            payload: json.data,
          });
        } catch {
          return alert('I didnt find the pokemon');
        }
      };
    }

export const createFilterPokemon=(payload)=>{
  console.log(payload)
  return{
    type: CREATE_FILTER,
    payload,
  }
}
export const Sort=(payload)=>{
  return {
      type: SORT,
      payload,
  }
}
export function filterByAttack(payload){
  return {
    type: "FILTER_BY_ATTACK",
    payload
  }
}
 
    export function filterPokemonsByType(payload) {
      console.log(payload)
      return {
        type: FILTER_BY_TYPE,
        payload,
      };
    }
    export const postPokemon=(payload)=>{
      return async function () {
          var json = await axios.post("http://localhost:3001/pokemons",payload)
          console.log(json)
          return json
      }
    }
    export const detail = (id) => {
      return async function (dispatch) {
        try {
          let pokeId = await axios.get(`http://localhost:3001/pokemons/${id}`);
          return dispatch({
            type: GET_DETAILS,
            payload: pokeId.data,
           
          });
          
        } catch (error) {
          console.log(error);
        }
      };
    
    };
    export  function getClean(){
      return{
        type: 'GET_CLEAN',
        payload: []
      }
    }       
  

