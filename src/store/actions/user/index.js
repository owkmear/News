import { loginAction, logoutAction } from './internal';
import { clearLoginMessage } from '../login';
import { clearRegistrationMessage } from '../registration';

import { isLoginedAPI, logoutAPI } from '../../../utils/api';

function isLogined() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      isLoginedAPI()
        .then(responce => {
          if (responce.success) dispatch(loginAction(responce.data));
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  };
}

function logout() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      logoutAPI()
        .then(responce => {
          dispatch(logoutAction(responce.Data));
          dispatch(clearLoginMessage());
          dispatch(clearRegistrationMessage());
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  };
}

export { isLogined, logout };
