export const calculateTotalRaw = (products) => {
  return products.reduce((totalPrice, nextProduct) => {
    return totalPrice + (nextProduct.price * nextProduct.count);
  }, 0);
};

export const calculateTotalPromos = (products) => {
  return products.reduce((totalPrice, nextProduct) => {
    return totalPrice + calculatePromos(nextProduct);
  }, 0);
};

const calculatePromos = (product) => {
  let { count, promotions } = product;

  return promotions.reduce((totalPrice, nextPromo) => {
    let price = 0;

    switch (nextPromo.type) {
      case 'QTY_BASED_PRICE_OVERRIDE':

        if (count === 1) {
          break;
        } else {
          price = Math.floor(count / nextPromo.required_qty) * (product.price * nextPromo.required_qty) - (Math.floor(count / nextPromo.required_qty) * nextPromo.price);
        }

        break;

      case 'FLAT_PERCENT':
        price = product.count * (product.price * (nextPromo.amount / 100));

        break;

      case 'BUY_X_GET_Y_FREE':
        price = Math.floor(count / nextPromo.required_qty) * product.price;

        break;

      default:
        break;
    }

    return totalPrice + price;
  }, 0);
};
