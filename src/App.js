
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header'
import Pokemon from './views/Pokemon'
import Home from './views/Home'
import SinglePokemon from './views/SinglePokemon'

function App() {
  return (
    <div className="App">
      <Router>
        

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/pokemon">
            <Pokemon />
          </Route>
        </Switch>

        <Switch>
          <Route path="/pokemon/:id">
            <SinglePokemon />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
