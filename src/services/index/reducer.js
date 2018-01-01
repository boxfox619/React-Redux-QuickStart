import * as actionTypes from './actions';

const initialState = {
}

const indexPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST_ACTION_TYPE:
      return {
        ...state
      }
    default:
      return state
  }
}

export default indexPageReducer;
