import React, { Component } from 'react';
import Products from './../containers/Products';
import Basket from './../containers/Basket';

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1>The Best Checkout System</h1>

          <div className="row">
            <Products />

            <Basket />
          </div>
        </div>
    );
  }
}

export default App;
