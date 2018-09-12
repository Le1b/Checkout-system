import React from 'react';
import App from './../../components/App';
import Products from './../../containers/Products';
import Basket from './../../containers/Basket';

describe('App component', () => {
  it('Should render title', () => {
    const appComponent = shallow(<App />);

    expect(appComponent.find('h1').text()).toEqual('The Best Checkout System');
    expect(appComponent.find(<Products />)).toBeTruthy();
    expect(appComponent.find(<Basket />)).toBeTruthy();
  });
});
