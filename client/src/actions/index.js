import axios from 'axios'
export const GET_ALL_POKEMONS='GET_ALL_POKEMONS'
// export const GET_POKEMON_NAME = 'GET_POKEMON_NAME'

export default function getPokemons(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/")
    return dispatch({
       type: GET_ALL_POKEMONS,
       payload: json.data 
    })
    }
}