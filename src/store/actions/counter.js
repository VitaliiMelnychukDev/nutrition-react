import * as actions from '../actions';

export const increment = () => {
  return {
    type: actions.INCREMENT
  }
};

export const add = (value) => {
  return {
    type: actions.ADD,
    value: value
  }
};