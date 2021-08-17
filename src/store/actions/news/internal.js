import * as t from '../../actionTypes/news';

export function newsRequest() {
  return {
    type: t.NEWS_GET_REQUEST
  };
}

export function newsSuccess(list) {
  return {
    type: t.NEWS_GET_SUCCESS,
    payload: list
  };
}

export function newsFailure(errorMessage) {
  return {
    type: t.NEWS_GET_FAILURE,
    payload: errorMessage
  };
}
