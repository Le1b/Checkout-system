import React, { Component } from 'react';

class BasketTotal extends Component {
  render() {
    const { raw, promos, pay } = this.props;

    return (
      <ul className="col list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Raw Total: <span>£{raw.toFixed(2)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Total Promos: <span>£{promos.toFixed(2)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Total Payable: <span>£{pay.toFixed(2)}</span>
        </li>
      </ul>
    );
  }
}

export default BasketTotal;
