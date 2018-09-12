import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import BasketList from './../components/BasketList';
import BasketTotal from './../components/BasketTotal';

class Basket extends Component {
  render() {
    const { basket } = this.props;

    return (
      <Fragment>
        <div className="col">
          <h3>Basket Contents</h3>

          <BasketList products={basket.products} />
        </div>

        <div className="col">
          <h3>Expected Totals</h3>

          <BasketTotal raw={basket.totalRaw} promos={basket.totalPromos} pay={basket.totalPay} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};


export default connect(mapStateToProps)(Basket);
