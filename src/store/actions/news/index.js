import { newsSuccess, newsFailure, newsRequest } from './internal';

import { getAllNews } from '../../../utils/api';

export function getNewsList() {
  return dispatch => {
    dispatch(newsRequest());
    return new Promise((resolve, reject) => {
      getAllNews()
        .then(responce => {
          if ('Response' in responce) dispatch(newsFailure(responce.Message));
          else dispatch(newsSuccess(responce.Data));
          resolve();
        })
        .catch(error => {
          dispatch(newsFailure('Network error'));
          reject(error);
        });
    });
  };
}
