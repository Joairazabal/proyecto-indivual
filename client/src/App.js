import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage'
import CreatePokemon from './Components/CreatePokemon/CreatePokemons'
import Detail from './Components/PokemonDetail/PokemonDetail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
 <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route  exact path='/pokemons' component={CreatePokemon}/>
        <Route exact path="/home/:id" component={Detail}/>
        </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
