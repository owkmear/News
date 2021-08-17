import { requestCurrency, setCurrencyList, errorLoadCurrency } from './internal'

import { getAllCryptocurrencies } from '../../../utils/api'

export function getCurrenciesList() {
  return (dispatch) => {
    dispatch(requestCurrency())
    return new Promise((resolve, reject) => {
      getAllCryptocurrencies()
        .then((responce) => {
          dispatch(setCurrencyList(responce.data))
          resolve()
        })
        .catch((error) => {
          dispatch(errorLoadCurrency(error))
          reject()
        })
    })
  }
}
