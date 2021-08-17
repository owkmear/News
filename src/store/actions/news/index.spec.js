import { newsRequest, newsSuccess, newsFailure } from './internal'
import { getNewsList } from './index'
import * as t from '../../actionTypes/news'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios)

const { REACT_APP_CRYPTOCOMPARE_API_KEY: CRYPTOCOMPARE_API_KEY } = process.env

describe('News actions', () => {
  describe('Sync actions', () => {
    it('newsRequest(): should create a action to set isLoading', () => {
      const expectedAction = {
        type: t.NEWS_GET_REQUEST
      }
      expect(newsRequest()).toEqual(expectedAction)
    })

    it('newsSuccess(): should attach news data', () => {
      const expectedAction = {
        type: t.NEWS_GET_SUCCESS,
        payload: [
          {
            id: '2688074',
            title: 'Bitcoin Eyes $12K Price Hurdle as Dominance Rate Hits 28-Month High',
            body: 'Bitcoin has broken out of bearish mode with a near 10-percent surge this morning and looks to be decoupling from alternative cryptocurrencies.'
          },
          {
            id: '2687430',
            title: 'Google Slashes Pixel 3 by $300 in Expecting of Pixel 4 Reveal',
            body: 'Coinspeaker Google Slashes Pixel 3 by $300 in Expecting of Pixel 4 RevealGoogle slashed $300 off the price of its premium flagship Pixel 3 and Pixel 3 XL phones, bringing them to the lowest price in recent memory. Pixel 3 phones now cost between $100 and $120 more than the mid-range Pixel 3a phones.Google Slashes Pixel 3 by $300 in Expecting of Pixel 4 Reveal'
          }
        ]
      }

      expect(newsSuccess(expectedAction.payload)).toEqual(expectedAction)
    })

    it('newsFailure(): should attach error message', () => {
      const errorMessage = 'Error validating params'

      const expectedAction = {
        type: t.NEWS_GET_FAILURE,
        payload: errorMessage
      }

      expect(newsFailure(errorMessage)).toEqual(expectedAction)
    })
  })

  describe('Asynchronous actions', () => {
    afterEach(() => {
      mock.reset()
    })

    it('getNewsList(): should have actions newsRequest and newsSuccess', () => {
      const expectedData = { Data: [1, 2, 3] }
      mock
        .onGet(
          `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${CRYPTOCOMPARE_API_KEY}`
        )
        .reply(200, expectedData)

      const expectedActions = [newsRequest(), newsSuccess(expectedData.Data)]
      const store = mockStore({})

      return store.dispatch(getNewsList()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('getNewsList(): should have actions newsRequest and newsFailure', () => {
      const expectedData = {
        Response: 'Error',
        Message: 'Error validating params'
      }
      mock
        .onGet(
          `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${CRYPTOCOMPARE_API_KEY}`
        )
        .reply(200, expectedData)

      const expectedActions = [newsRequest(), newsFailure(expectedData.Message)]
      const store = mockStore({})

      return store.dispatch(getNewsList()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
