import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// pages
import About from '../src/pages/About';
import Cart from '../src/pages/Cart';
import Checkout from '../src/pages/Checkout';
import Error from '../src/pages/Error';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import ProductDetails from '../src/pages/ProductDetails';
import Products from '../src/pages/Products';
// components
import Header from '../src/components/Header';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';




export default function App() {
  return <Router>
    <Header />
    <Alert />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <PrivateRoute path="/checkout" name="simona">
        <Checkout />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route path="/products/:id" children={<ProductDetails></ProductDetails>} >
      </Route>

      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </Router>
}
