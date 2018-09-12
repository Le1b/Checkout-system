import React, {Fragment} from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Basket from '../../containers/Basket';
import BasketList from '../../components/BasketList';
import BasketTotal from '../../components/BasketTotal';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Basket container', () => {
  it('Basket container should be rendered', () => {
    const props = {
      totalRaw: 0,
      totalPromos: 0,
      totalPay: 0,
      products: [
        { id: 1, count: 1, name: 'test 1' },
        { id: 2, count: 1, name: 'test 1' }
      ]
    };
    const store = mockStore({
      basket: props
    });

    const basketListComponent = mount(<Basket store={store} />);

    expect(basketListComponent.find(<Fragment />)).toBeTruthy();
    expect(basketListComponent.find('h3').first().text()).toEqual('Basket Contents');
    expect(basketListComponent.find(<BasketTotal />)).toBeTruthy();
    expect(basketListComponent.find(<BasketList />)).toBeTruthy();

    basketListComponent.unmount();
  });
});
