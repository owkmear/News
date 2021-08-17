import * as t from '../../actionTypes/login'

export function loginRequest() {
  return {
    type: t.LOGIN_GET_REQUEST
  }
}

export function loginSuccess(successMessage) {
  return {
    type: t.LOGIN_GET_SUCCESS,
    payload: successMessage
  }
}

export function loginFailure(errorMessage) {
  return {
    type: t.LOGIN_GET_FAILURE,
    payload: errorMessage
  }
}

export function loginClear() {
  return {
    type: t.LOGIN_GET_CLEAR
  }
}
