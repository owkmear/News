import * as t from '../../actionTypes/ui';

export function setLoadStatus(status) {
  return {
    type: t.SET_LOAD_STATUS,
    payload: status
  };
}