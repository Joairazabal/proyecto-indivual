import axios from 'axios'


export const GET_ALL_POKEMONS='GET_ALL_POKEMONS'
export const GET_TYPES='GET_TYPES'
export const GET_POKEMONS_NAME= 'GET_POKEMONs_NAME'
// export const GET_POKEMON_NAME = 'GET_POKEMON_NAME'


export default function getPokemons(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/pokemons")
    return dispatch({
       type: GET_ALL_POKEMONS,
       payload: json.data 
    })
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
          var json = await axios.get("http://localhost:3001/pokemons/" + name) 
          return dispatch({
            type: GET_POKEMONS_NAME,
            payload: json.data,
          });
        } catch {
          return alert("No se encontró el pokemon");
        }
      };
    }


