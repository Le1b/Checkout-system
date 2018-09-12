import { getProductById } from './../services/rest_api';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export const actionAddProduct = (product) => dispatch => {
  return getProductById(product.id)
    .then(productDetail => {
      dispatch({
        type: ADD_PRODUCT,
        payload: productDetail,
      });
    });
};

