import { getProducts, getProductById } from './../services/rest_api';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';

export const actionProducts = () => dispatch => {
  return getProducts()
    .then(products => {
      dispatch({
        type: GET_PRODUCTS,
        payload: products,
      });
    })
};

export const actionProduct = (id) => dispatch => {
  return getProductById(id)
    .then(product => {
      dispatch({
        type: GET_PRODUCT,
        payload: product,
      });
    });
};
