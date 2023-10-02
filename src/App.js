import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Home } from './components/Home.js';
import { AddProducts } from './components/AddProducts.js';

export class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/' component = { AddProducts } />
        </Switch>
     </BrowserRouter>
    )
  }
}

export default App