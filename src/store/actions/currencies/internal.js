import * as t from '../../actionTypes/currencies'

export function requestCurrency() {
  return {
    type: t.CRYPTOCURRENCY_GET_REQUEST
  }
}

export function setCurrencyList(list) {
  return {
    type: t.CRYPTOCURRENCY_GET_SUCCESS,
    payload: list
  }
}

export function errorLoadCurrency(errorMessage) {
  return {
    type: t.CRYPTOCURRENCY_GET_FAILURE,
    payload: errorMessage
  }
}
