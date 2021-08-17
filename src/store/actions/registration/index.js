import {
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  registrationClear,
} from './internal';
import { registrationAction } from '../user/internal';

import { registrationAPI } from '../../../utils/api';

export function registration(username, email, password) {
  return dispatch => {
    dispatch(registrationRequest());
    return new Promise((resolve, reject) => {
      registrationAPI(username, email, password)
        .then(responce => {
          if (responce.success) {
            dispatch(registrationSuccess('success'));
            dispatch(registrationAction(responce.data));
          } else dispatch(registrationFailure('password-or-login'));
          resolve();
        })
        .catch(error => {
          dispatch(registrationFailure('network-error'));
          reject(error);
        });
    });
  };
}

export function clearRegistrationMessage() {
  return dispatch => {
    dispatch(registrationClear());
  };
}
