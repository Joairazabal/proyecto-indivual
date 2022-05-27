import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LadingPage from './Components/LandingPage'
import Home from './Components/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/'>
      <LadingPage/>
      </Route>
      <Route exact path='/home'>
        <Home/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
