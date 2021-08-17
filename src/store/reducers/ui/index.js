import * as t from '../../actionTypes/ui';
import initialState from './initialState';

function ui(state = initialState, action) {
  switch(action.type) {
    case t.SET_LOAD_STATUS: {
      return { ...state, dataLoaded: action.payload };
    }
    default:
      return state;
  };
};

export default ui;