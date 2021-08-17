import React from 'react'
import { shallow } from 'enzyme'
import Article from './Article'

describe('Article component', () => {
  const props = {
    imageurl: 'https://images.cryptocompare.com/news/cointelegraph/dqkg30ggA0x.png',
    title: '$3B Ponzi Scheme Is Now Allegedly Dumping Bitcoin by the Hundreds',
    body: 'Wallets belonging to PlusToken reportedly contain thousands of Bitcoin and other cryptocurrencies',
    source_info: {
      name: 'CoinTelegraph'
    },
    published_on: 1565863140,
    categories: 'BTC|ETH|Market|Asia',
    url: 'https://cointelegraph.com/news/3b-ponzi-scheme-is-now-allegedly-dumping-bitcoin-by-the-hundreds'
  }

  describe('Article component should render correctly', () => {
    const nextProps = {
      ...props,
      imageurl: 'https://images.cryptocompare.com/news/financemagnates/coMecOic4g0.jpeg',
      title: 'Mastercard Seems to Be All Set to Develop Its Own Crypto Wallet Platform',
      source_info: {
        name: 'CryptoNewsZ'
      },
      body: 'PlusToken, a scam that spread to China and Korea in the past months, accrued vast Bitcoin (BTC) reserves, currently liquidating them in daily tranches.',
      url: 'https://images.cryptocompare.com/news/default/coinspeaker.png'
    }

    const wrapper = shallow(<Article {...nextProps} />)

    it('Render properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Should exist', () => {
      expect(wrapper.exists()).toEqual(true)
    })

    it('Should have div', () => {
      expect(wrapper.is('div')).toEqual(true)
    })

    it('Should have class news__article', () => {
      expect(wrapper.hasClass('news__article')).toEqual(true)
    })

    it('Should have news source name', () => {
      expect(wrapper.find('.news__name').text()).toEqual(nextProps.source_info.name)
    })

    it('Should have news text', () => {
      expect(wrapper.find('.news__body').text()).toEqual(nextProps.body)
    })

    it('Should have image', () => {
      expect(wrapper.find('.news__article-image img').at(0).props().src).toEqual(nextProps.imageurl)
      expect(wrapper.find('.news__article-image a').at(0).props().href).toEqual(nextProps.url)
      expect(wrapper.find('img').parent().is('a')).toEqual(true)
    })
  })
})
