import initialState from './initialState'
import * as t from '../../actionTypes/registration'

function registration(state = initialState, action) {
  switch (action.type) {
    case t.REGISTRATION_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
        successMessage: null,
        errorMessage: null
      }
    case t.REGISTRATION_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        successMessage: action.payload,
        errorMessage: null
      }
    case t.REGISTRATION_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        successMessage: null,
        errorMessage: action.payload
      }
    case t.REGISTRATION_GET_CLEAR:
      return {
        ...state,
        isLoading: false,
        successMessage: null,
        errorMessage: null
      }
    default:
      return state
  }
}

export default registration
