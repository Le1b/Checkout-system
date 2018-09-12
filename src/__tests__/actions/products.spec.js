import { GET_PRODUCT, GET_PRODUCTS, actionProducts, actionProduct } from './../../actions/products';
import moxios from 'moxios';
import { actionAddProduct, ADD_PRODUCT } from "../../actions/basket";

describe('Products actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('actionProducts', async () => {
    const dispatch = jest.fn();

    moxios.stubRequest('http://localhost:8081/products', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'no-cache': 'no',
      },
      status: 200,
      response: [11, 22, 33]
    });

    const expectedAction = {
      type: GET_PRODUCTS,
      payload: [11, 22, 33],
    };

    await actionProducts()(dispatch);

    expect(dispatch).toBeCalledWith(expectedAction);
  });

  it('actionProduct', async () => {
    const dispatch = jest.fn();

    moxios.stubRequest('http://localhost:8081/products/qwerty', {
      status: 200,
      response: [4, 2, 5]
    });

    const expectedAction = {
      type: GET_PRODUCT,
      payload: [4, 2, 5],
    };

    await actionProduct('qwerty')(dispatch);

    expect(dispatch).toBeCalledWith(expectedAction);
  });
});
