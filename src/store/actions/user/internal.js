import * as t from '../../actionTypes/user';

export function loginAction(user) {
  return {
    type: t.LOGIN,
    payload: user,
  };
}

export function logoutAction() {
  return {
    type: t.LOGOUT,
  };
}

export function registrationAction(user) {
  return {
    type: t.REGISTRATION,
    payload: user,
  };
}
