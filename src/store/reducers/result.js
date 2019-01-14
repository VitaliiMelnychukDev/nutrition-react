import * as actions from '../actions';

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_RESULT: {
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.counter
        })
      };
    }
    case actions.DELETE_RESULT: {
      const newResults = state.results.filter((result) => result.id !== action.id);

      return {
        ...state,
        results: newResults
      };
    }
  }
  return state;
};

export default resultReducer;