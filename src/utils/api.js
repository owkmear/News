import axios from 'axios';
import allCryptocurrencies from '../mirage/requests/allCryptocurrencies';
import allNews from '../mirage/requests/allNews';

const getAllCryptocurrencies = () => {
  const {
    REACT_APP_COINMARKETCAP_API_KEY: COINMARKETCAP_API_KEY,
  } = process.env;
  const NODE_ENV = 'production';

  if (NODE_ENV === 'development')
    return new Promise(resolve => {
      resolve(allCryptocurrencies);
    });

  if (NODE_ENV === 'production')
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url:
          'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        timeout: 5000,
        headers: { 'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY },
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(() => {
          reject('Network erorr');
        });
    });
};

const getAllNews = () => {
  const {
    REACT_APP_CRYPTOCOMPARE_API_KEY: CRYPTOCOMPARE_API_KEY,
  } = process.env;
  const NODE_ENV = 'production';

  if (NODE_ENV === 'development')
    return new Promise(resolve => {
      resolve(allNews);
    });

  if (NODE_ENV === 'production')
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        timeout: 5000,
        url: `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${CRYPTOCOMPARE_API_KEY}`,
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
};

const loginAPI = (email, password) => {
  const {
    REACT_APP_COININFO_API_URL: COININFO_API_URL,
    NODE_ENV,
  } = process.env;
  // TODO: make mock function which check correct login and return `successMessage` or `errorMessage`
  if (NODE_ENV === 'production' || NODE_ENV === 'development')
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: `${COININFO_API_URL}/login`,
        timeout: 5000,
        data: {
          email,
          password,
        },
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(() => {
          reject('Network erorr');
        });
    });
};

const isLoginedAPI = () => {
  const { REACT_APP_COININFO_API_URL: COININFO_API_URL } = process.env;
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${COININFO_API_URL}/isLogined`,
      timeout: 5000,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

function logoutAPI() {
  const { REACT_APP_COININFO_API_URL: COININFO_API_URL } = process.env;
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${COININFO_API_URL}/logout`,
      timeout: 5000,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

const registrationAPI = (username, email, password) => {
  const {
    REACT_APP_COININFO_API_URL: COININFO_API_URL,
    NODE_ENV,
  } = process.env;
  // TODO: make mock function which check correct login and return `successMessage` or `errorMessage`
  if (NODE_ENV === 'production' || NODE_ENV === 'development')
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: `${COININFO_API_URL}/registration`,
        timeout: 5000,
        data: {
          username,
          email,
          password,
        },
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(() => {
          reject('Network erorr');
        });
    });
};

export {
  getAllCryptocurrencies,
  getAllNews,
  loginAPI,
  isLoginedAPI,
  logoutAPI,
  registrationAPI,
};
