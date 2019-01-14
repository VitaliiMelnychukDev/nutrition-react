import * as actions from '../actions';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT :
      return {
        counter: state.counter + 1
      };
    case actions.ADD :
      return {
        counter: state.counter + action.value
      };
  }

  return state;
};

export default counterReducer;