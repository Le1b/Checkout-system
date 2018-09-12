import basket from './../../reducers/basket';
import { ADD_PRODUCT } from './../../actions/basket';

describe('Basket reducer', () => {
  it('ADD_PRODUCT Amazing Pizza', () => {
    let state;
    let previousState = { totalRaw: 0, totalPromos: 0, totalPay: 0, products: [] };

    state = basket(previousState, {
      type: 'ADD_PRODUCT',
      payload: {
        id: 'Dwt5F7KAhi',
        name: 'Amazing Pizza!',
        price: 1099,
        promotions: [{ id: 'ibt3EEYczW', type: 'QTY_BASED_PRICE_OVERRIDE', required_qty: 2, price: 1799 }]
      }
    });

    expect(state).toEqual({
      totalRaw: 1099,
      totalPromos: 0,
      totalPay: 1099,
      products: [{
        id: 'Dwt5F7KAhi',
        name: 'Amazing Pizza!',
        price: 1099,
        promotions: [{ id: 'ibt3EEYczW', type: 'QTY_BASED_PRICE_OVERRIDE', required_qty: 2, price: 1799 }],
        count: 1
      }]
    });
  });

  it('ADD_PRODUCT the same product Amazing Pizza', () => {
    let state;
    let previousState = {
      totalRaw: 1099,
      totalPromos: 0,
      totalPay: 1099,
      products: [{
        id: 'Dwt5F7KAhi',
        name: 'Amazing Pizza!',
        price: 1099,
        promotions: [{ id: 'ibt3EEYczW', type: 'QTY_BASED_PRICE_OVERRIDE', required_qty: 2, price: 1799 }],
        count: 1
      }]
    };

    state = basket(previousState, {
      type: 'ADD_PRODUCT',
      payload: {
        id: 'Dwt5F7KAhi',
        name: 'Amazing Pizza!',
        price: 1099,
        promotions: [{ id: 'ibt3EEYczW', type: 'QTY_BASED_PRICE_OVERRIDE', required_qty: 2, price: 1799 }]
      }
    });

    expect(state).toEqual({
      totalRaw: 2198,
      totalPromos: 399,
      totalPay: 1799,
      products: [{
        id: 'Dwt5F7KAhi',
        name: 'Amazing Pizza!',
        price: 1099,
        promotions: [{ id: 'ibt3EEYczW', type: 'QTY_BASED_PRICE_OVERRIDE', required_qty: 2, price: 1799 }],
        count: 2
      }]
    });
  });

  it('ADD_PRODUCT Amazing Burger', () => {
    let state;
    let previousState = { totalRaw: 0, totalPromos: 0, totalPay: 0, products: [] };

    state = basket(previousState, {
      type: 'ADD_PRODUCT',
      payload: {
        id: 'PWWe3w1SDU',
        name: 'Amazing Burger!',
        price: 999,
        promotions: [{ id: 'ZRAwbsO2qM', type: 'BUY_X_GET_Y_FREE', required_qty: 2, free_qty: 1 }]
      }
    });

    expect(state).toEqual({
      totalRaw: 999,
      totalPromos: 0,
      totalPay: 999,
      products: [{
        id: 'PWWe3w1SDU',
        name: 'Amazing Burger!',
        price: 999,
        promotions: [{ id: 'ZRAwbsO2qM', type: 'BUY_X_GET_Y_FREE', required_qty: 2, free_qty: 1 }],
        count: 1
      }]
    });
  });

  it('ADD_PRODUCT the same product Amazing Burger', () => {
    let state;
    let previousState = {
      totalRaw: 999,
      totalPromos: 0,
      totalPay: 999,
      products: [{
        id: 'PWWe3w1SDU',
        name: 'Amazing Burger!',
        price: 999,
        promotions: [{ id: 'ZRAwbsO2qM', type: 'BUY_X_GET_Y_FREE', required_qty: 2, free_qty: 1 }],
        count: 1
      }]
    };

    state = basket(previousState, {
      type: 'ADD_PRODUCT',
      payload: {
        id: 'PWWe3w1SDU',
        name: 'Amazing Burger!',
        price: 999,
        promotions: [{ id: 'ZRAwbsO2qM', type: 'BUY_X_GET_Y_FREE', required_qty: 2, free_qty: 1 }]
      }
    });

    expect(state).toEqual({
      totalRaw: 1998,
      totalPromos: 999,
      totalPay: 999,
      products: [{
        id: 'PWWe3w1SDU',
        name: 'Amazing Burger!',
        price: 999,
        promotions: [{ id: 'ZRAwbsO2qM', type: 'BUY_X_GET_Y_FREE', required_qty: 2, free_qty: 1 }],
        count: 2
      }]
    });
  });

  it('ADD_PRODUCT Amazing Salad', () => {
    let state;
    let previousState = { totalRaw: 0, totalPromos: 0, totalPay: 0, products: [] };

    state = basket(previousState, {
      type: 'ADD_PRODUCT',
      payload: {
        id: 'C8GDyLrHJb',
        name: 'Amazing Salad!',
        price: 499,
        promotions: [{ id: 'Gm1piPn7Fg', type: 'FLAT_PERCENT', amount: 10 }]
      }
    });

    expect(state).toEqual({
      totalRaw: 499,
      totalPromos: 49.900000000000006,
      totalPay: 449.1,
      products: [{
        id: 'C8GDyLrHJb',
        name: 'Amazing Salad!',
        price: 499,
        promotions: [{ id: 'Gm1piPn7Fg', type: 'FLAT_PERCENT', amount: 10 }],
        count: 1
      }]
    });
  });

  it('UNKNOWN_ACTION should return default case', () => {
    let state;
    let previousState = { totalRaw: 40, totalPromos: 5, totalPay: 90, products: [1, 2, 3] };

    state = basket(previousState, {
      type: 'UNKNOWN_ACTION',
      payload: { id: 9, data: [2, 5] }
    });

    expect(state).toEqual({ totalRaw: 40, totalPromos: 5, totalPay: 90, products: [1, 2, 3] });
  });
});
