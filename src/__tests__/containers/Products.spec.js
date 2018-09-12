import React, {Fragment} from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Products from '../../containers/Products';
import ProductsList from '../../components/ProductsList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Products container', () => {
  it('Products container should be rendered', () => {
    const store = mockStore({
      products: [
        { id: 1, count: 1, name: 'test 1' },
        { id: 2, count: 1, name: 'test 1' }
      ],
      addProductToBasket: jest.fn(),
    });

    const productsContainer = mount(<Products store={store} />);

    expect(productsContainer.find(<ProductsList />)).toBeTruthy();

    productsContainer.unmount();
  });
});
