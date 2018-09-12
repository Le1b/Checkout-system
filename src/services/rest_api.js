import axios from 'axios';

const REST_SERVER_URL = 'http://localhost:8081';

export const getProducts = () => {
  return axios
    .get(`${REST_SERVER_URL}/products`)
    .then(response => response.data);
};

export const getProductById = (id) => {
  return axios
    .get(`${REST_SERVER_URL}/products/${id}`)
    .then(response => response.data);
};
