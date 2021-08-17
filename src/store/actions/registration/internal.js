import * as t from '../../actionTypes/registration';

export function registrationRequest() {
  return {
    type: t.REGISTRATION_GET_REQUEST,
  };
}

export function registrationSuccess(successMessage) {
  return {
    type: t.REGISTRATION_GET_SUCCESS,
    payload: successMessage,
  };
}

export function registrationFailure(errorMessage) {
  return {
    type: t.REGISTRATION_GET_FAILURE,
    payload: errorMessage,
  };
}

export function registrationClear() {
  return {
    type: t.REGISTRATION_GET_CLEAR,
  };
}
