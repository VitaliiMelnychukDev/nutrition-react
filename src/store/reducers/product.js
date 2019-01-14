import * as actions from '../actions';

const initialState = {
  products: []
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.PRODUCTS_UPLOADED:
      return {
        products: action.products
      }
  }
  return state;
}

export default productsReducer;