import React, { Component } from 'react';

class BasketList extends Component {
  render() {
    return (
      <ul className="col list-group list-group-flush">
        {
          this.props.products.map((product) => <li
              key={product.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {product.count}x {product.name}
            </li>
          )
        }
      </ul>
    );
  }
}

export default BasketList;
