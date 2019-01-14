import * as actions from '../actions';

export function storeResult(counter) {
  return {
    type: actions.STORE_RESULT,
    counter:counter
  }
}

export function deleteResult(resultId) {
  return {
    type: actions.DELETE_RESULT,
    id: resultId
  }
}