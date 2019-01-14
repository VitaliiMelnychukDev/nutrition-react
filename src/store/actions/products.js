import * as actions from '../actions';
import axios from 'axios';

export const products_uploaded = (products) => {
  return {
    type: actions.PRODUCTS_UPLOADED,
    products: products
  }
};

export const product_uploading = () => {
  return dispatch => {
    axios.get('http://192.168.33.10:3000/products/').then((products) => {
      dispatch(products_uploaded(products.data));
    }).catch((err) => {

    })
  };
};