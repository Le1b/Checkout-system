import React, { Component } from 'react';
import ProductListItem from './ProductListItem';

class ProductsList extends Component {
  render() {
    return (
      <div className="col">
        <h3>Products</h3>

        <ul className="col list-group list-group-flush">
          {
            this.props.products.map((product) => <ProductListItem
              key={product.id}
              product={product}
              addProductToBasket={this.props.addProductToBasket}
            />)
          }
        </ul>
      </div>
    );
  }
}

export default ProductsList;
