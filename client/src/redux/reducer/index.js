import { GET_ALL_POKEMONS, sort } from "../actions"
import { GET_TYPES } from "../actions"
import { GET_POKEMONS_NAME } from "../actions"
import { FILTER_BY_TYPE } from "../actions"
import { CREATE_FILTER } from "../actions"
import { SORT } from "../actions"
import {FILTER_BY_ATTACK} from "../actions"
import  {GET_DETAILS} from "../actions"

const initialState = {
    pokemons: [],
    allTypes: [],
    allPokemons: [],
    allDetail:[],
    detail: [],

}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload, 
                allPokemons: action.payload,
            }
        case GET_TYPES:
            return {
                ...state,
                allTypes: action.payload
            }
        case GET_POKEMONS_NAME:
            return {
                ...state,
                pokemons: [action.payload]
            };
         
        case FILTER_BY_TYPE:
            const allPokemons = state.allPokemons;
            const typeFiltered =action.payload === "All" ? allPokemons : allPokemons.filter((e) => e.type.includes(action.payload));
            return {
                ...state,
                pokemons: typeFiltered,
            };
        case CREATE_FILTER:
            const allPokemon = state.allPokemons;
            const filterCreate= action.payload === 'created'? allPokemon.filter(el=> el.createdInDb): allPokemon.filter(el=> !el.createdInDb)
            return{
            ...state,
            pokemons: action.payload === 'All'? state.allPokemons: filterCreate,
            }
            case SORT:
                let orderedPokemons = action.payload === 'ASCENDENTE'?
                state.pokemons.sort(function(a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase())return 1;    
                    if (b.name.toLowerCase() > a.name.toLowerCase())return -1;
 
                    return 0;
              
                    
                }):
                state.pokemons.sort(function(a,b){
                    if(a.name.toLowerCase()  > b.name.toLowerCase() ) return -1;
                    if(b.name.toLowerCase() > a.name.toLowerCase() ) return 1;
                    return 0;
                })
                return{
                    ...state,
                    pokemons: orderedPokemons
                }
                case FILTER_BY_ATTACK:
                let orderedByAttack = action.payload === 'Menor fuerza'?
                state.pokemons.sort(function(a, b) {
                    if (a.attack> b.attack)return 1;    
                    if (b.attack > a.attack)return -1;
 
                    return 0;
              
                    
                }):
                state.pokemons.sort(function(a,b){
                    if(a.attack > b.attack) return -1;
                    if(b.attack > a.attack) return 1;
                    return 0;
                })
                return{
                    ...state,
                    pokemons: orderedByAttack
                }
    

                    case GET_DETAILS:
                        return {
                          ...state,
                          detail: action.payload,
                        };
                    case 'GET_CLEAN':
                        return{
                            ...state,
                            detail:action.payload
                        }
                 
        default:
            return {...state }
    }

}

export default rootReducer;