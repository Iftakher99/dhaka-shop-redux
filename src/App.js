import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Header from './components/Header';
import './App.css';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {' '}
            <ProductListing />
          </Route>
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
