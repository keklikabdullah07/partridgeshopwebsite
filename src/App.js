import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import React from "react";
import ShoppingCart from "./containers/ShoppingCart";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route path="/shopping" exact component={ShoppingCart} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
