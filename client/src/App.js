import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage'
import CreatePokemon from './Components/CreatePokemon/CreatePokemons'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path='/pokemons' element={<CreatePokemon/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
