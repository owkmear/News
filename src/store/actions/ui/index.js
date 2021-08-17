import { setLoadStatus } from './internal'
import { isLogined } from '../user'

export function loadData() {
  return (dispatch, getState) => {
    if (!getState().ui.dataLoaded)
      dispatch(isLogined()).then(() => {
        dispatch(setLoadStatus(true))
      })
  }
}
