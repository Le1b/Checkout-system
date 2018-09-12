import { ADD_PRODUCT } from './../actions/basket';
import { calculateTotalRaw, calculateTotalPromos } from './../utils/promotions';

const basketInitialState = {
  totalRaw: 0,
  totalPromos: 0,
  totalPay: 0,
  products: []
};

const basket = (state = basketInitialState, action) => {

  switch (action.type) {
    case ADD_PRODUCT:
      let basket = {};
      let totalRaw = 0;

      let product = state.products.find((product) => {
        return product.id === action.payload.id;
      });

      if (product) {
        product.count++;

        basket = {
          ...state,
          products: [
            ...state.products
          ]
        };
      } else {

        basket = {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              count: 1
            }
          ]
        };
      }

      totalRaw = calculateTotalRaw(basket.products);

      basket.totalPromos = calculateTotalPromos(basket.products);
      basket.totalRaw = totalRaw;
      basket.totalPay = totalRaw - basket.totalPromos;

      return basket;

    default:
      return state;
  }
};

export default basket;
