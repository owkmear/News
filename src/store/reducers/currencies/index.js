import initialState from './initialState';
import * as t from '../../actionTypes/currencies';

function currencies(state = initialState, action) {
  switch (action.type) {
    case t.CRYPTOCURRENCY_GET_REQUEST:
      return { ...state, isLoading: true, errorMessage: null };
    case t.CRYPTOCURRENCY_GET_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case t.CRYPTOCURRENCY_GET_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
}

export default currencies;
