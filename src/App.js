import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Home } from './components/Home.js';
import { AddProducts } from './components/AddProducts.js';
import { ProductsContextProvider } from './global/ProductsContext.js';
import { Signup } from './components/Signup.js';
import { Login } from './components/Login.js';

export class App extends Component {
  render() {
    return (
      <ProductsContextProvider>
     <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/addproducts' component = { AddProducts } />
          <Route path = '/signup' component = { Signup } />
          <Route path = '/login' component = { Login } />
        </Switch>
     </BrowserRouter>
     </ProductsContextProvider>
    )
  }
}

export default App