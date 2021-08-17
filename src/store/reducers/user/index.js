import * as t from '../../actionTypes/user';
import initialState from './initialState';

function user(state = initialState, action) {
  switch (action.type) {
    case t.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        logined: true,
      };
    case t.REGISTRATION:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        logined: true,
      };
    case t.LOGOUT:
      return { ...state, email: null, username: null, logined: false };
    default:
      return state;
  }
}

export default user;
