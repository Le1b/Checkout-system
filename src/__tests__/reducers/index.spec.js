import reducer from './../../reducers';

describe('Combine reducer', () => {
  it('Should return default state', () => {
    let state;

    state = reducer(undefined, {});

    expect(state).toEqual({
      products: [],
      basket: {
        totalRaw: 0,
        totalPromos: 0,
        totalPay: 0,
        products: []
      }
    });
  });
});
