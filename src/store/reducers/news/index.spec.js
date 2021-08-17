import initialState from './initialState'
import reducer from './index'
import * as t from '../../actionTypes/news'

describe('News reducer', () => {
  it('NEWS_GET_REQUEST after situation without errorMessage', () => {
    const action = {
      type: t.NEWS_GET_REQUEST
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      errorMessage: null
    })
  })

  it('NEWS_GET_REQUEST after error', () => {
    const initialStateWithError = {
      data: [],
      isLoading: false,
      errorMessage: 'Path does not exist'
    }
    const action = {
      type: t.NEWS_GET_REQUEST
    }

    expect(reducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isLoading: true,
      errorMessage: null
    })
  })

  it('NEWS_GET_SUCCESS', () => {
    const stateBefore = {
      data: [],
      isLoading: true,
      errorMessage: null
    }

    const action = {
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

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      data: action.payload,
      isLoading: false
    })
  })

  it('NEWS_GET_FAILURE', () => {
    const stateBefore = {
      data: [],
      isLoading: true,
      errorMessage: null
    }

    const action = {
      type: t.NEWS_GET_FAILURE,
      payload: 'Error validating params'
    }

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      errorMessage: action.payload
    })
  })
})
