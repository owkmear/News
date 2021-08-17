import initialState from './initialState';
import * as t from '../../actionTypes/news';

function news(state = initialState, action) {
  switch (action.type) {
    case t.NEWS_GET_REQUEST:
      return { ...state, isLoading: true, errorMessage: null };
    case t.NEWS_GET_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case t.NEWS_GET_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
}

export default news;