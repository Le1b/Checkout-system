import { ADD_PRODUCT, actionAddProduct } from './../../actions/basket';
import moxios from 'moxios';

describe('Basket actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('actionAddProduct', async () => {
    const dispatch = jest.fn();

    moxios.stubRequest('http://localhost:8081/products/qwerty', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'no-cache': 'no',
      },
      status: 200,
      response: [1, 2, 3]
    });

    const expectedAction = {
      type: ADD_PRODUCT,
      payload: [1, 2, 3],
    };

    await actionAddProduct({id: 'qwerty'})(dispatch);

    expect(dispatch).toBeCalledWith(expectedAction);
  });
});
