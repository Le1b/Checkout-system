import React, { Component } from 'react';

class ProductListItem extends Component {
  render() {
    const { product } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {product.name} - {product.price}
        <span onClick={() => this.props.addProductToBasket(product)}
              className="btn badge badge-primary badge-pill">Buy</span>
      </li>
    );
  }
}

export default ProductListItem;
