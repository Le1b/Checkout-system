import React from 'react';
import BasketList from './../../components/BasketList';

describe('Basket List', () => {
  it('Basket List should be rendered', () => {
    const props = {
      products: [
        { id: 1, count: 1, name: 'test 1' },
        { id: 1, count: 1, name: 'test 1' }
        ]
    };

    const basketListComponent = shallow(<BasketList {...props} />);

    expect(basketListComponent.find('ul.col.list-group.list-group-flush')).toBeTruthy();
    expect(basketListComponent.find('li.list-group-item')).toHaveLength(2);
  });
});
