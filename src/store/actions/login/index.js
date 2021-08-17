import { loginRequest, loginSuccess, loginFailure, loginClear } from './internal'
import { loginAction } from '../user/internal'

import { loginAPI } from '../../../utils/api'

export function login(email, password) {
  return (dispatch) => {
    dispatch(loginRequest())
    return new Promise((resolve, reject) => {
      loginAPI(email, password)
        .then((responce) => {
          if (responce.success) {
            dispatch(loginSuccess('success'))
            dispatch(loginAction(responce.data))
          } else dispatch(loginFailure('password-or-login'))
          resolve()
        })
        .catch((error) => {
          dispatch(loginFailure('network-error'))
          reject(error)
        })
    })
  }
}

export function clearLoginMessage() {
  return (dispatch) => {
    dispatch(loginClear())
  }
}
