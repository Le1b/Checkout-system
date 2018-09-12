import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductsList from './../components/ProductsList';
import {actionProducts} from './../actions/products';
import {actionAddProduct} from './../actions/basket';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <ProductsList products={this.props.products} addProductToBasket={this.props.addProductCb} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductCb: bindActionCreators(actionAddProduct, dispatch),
    getProducts: bindActionCreators(actionProducts, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
