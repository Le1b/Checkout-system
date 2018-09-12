import products from './../../reducers/products';
import { GET_PRODUCTS } from './../../actions/products';

describe('Products reducer', () => {
  it('GET_PRODUCTS', () => {
    let initialState = { totalRaw: 0, totalPromos: 0, totalPay: 0, products: [] };
    let state;

    state = products(initialState, {
      type: 'GET_PRODUCTS',
      payload: [
        { id: 'Dwt5F7KAhi', name: 'Amazing Pizza!', price: 1099 },
        { id: 'PWWe3w1SDU', name: 'Amazing Burger!', price: 999 }]
    });

    expect(state).toEqual([
      { id: 'Dwt5F7KAhi', name: 'Amazing Pizza!', price: 1099 },
      { id: 'PWWe3w1SDU', name: 'Amazing Burger!', price: 999 }]);
  });

  it('UNKNOWN_ACTION should return default case', () => {
    let state;
    let previousState = { totalRaw: 40, totalPromos: 5, totalPay: 90, products: [1, 2, 3] };

    state = products(previousState, {
      type: 'UNKNOWN_ACTION',
      payload: { id: 9, data: [2, 5] }
    });

    expect(state).toEqual({ totalRaw: 40, totalPromos: 5, totalPay: 90, products: [1, 2, 3] });
  });
});
