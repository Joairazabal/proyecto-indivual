import { GET_ALL_POKEMONS } from "../actions"
import { GET_TYPES } from "../actions"
import { GET_POKEMONS_NAME } from "../actions"


const initialState={
    pokemons : [],
    types: [],
    pokemonsName: [],
}
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_POKEMONS:
            return{
                ...state,
                pokemons:action.payload
            }
            case GET_TYPES:
                return{
                    ...state,
                    types:action.payload
                }
                case GET_POKEMONS_NAME:
                    return {
                        ...state,
                        pokemonsName: action.payload
                    };
            default: 
            return{ ...state}
    }

}

export default rootReducer;