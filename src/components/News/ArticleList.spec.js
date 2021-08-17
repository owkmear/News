import React from 'react'
import { shallow } from 'enzyme'
import ArticlesList from './ArticlesList'
import Article from './Article'

describe('ArticlesList component', () => {
  const props = {
    data: []
  }

  describe('Article component should render correctly', () => {
    const nextProps = {
      ...props,
      data: [
        {
          id: '2688074',
          guid: 'https://www.coindesk.com/?p=413057',
          published_on: 1565003112,
          imageurl: 'https://images.cryptocompare.com/news/coindesk/ex97cg22wyA.jpeg',
          title: 'Bitcoin Eyes $12K Price Hurdle as Dominance Rate Hits 28-Month High',
          url: 'https://www.coindesk.com/bitcoin-eyes-12k-price-hurdle-as-dominance-rate-hits-28-month-high',
          source: 'coindesk',
          body: 'Bitcoin has broken out of bearish mode with a near 10-percent surge this morning and looks to be decoupling from alternative cryptocurrencies.',
          tags: 'Markets|Bitcoin|Markets News|Prices|Bitcoin Dominance Rate',
          categories: 'BTC|Market|Trading',
          upvotes: '0',
          downvotes: '0',
          lang: 'EN',
          source_info: {
            name: 'CoinDesk',
            lang: 'EN',
            img: 'https://images.cryptocompare.com/news/default/coindesk.png'
          }
        },
        {
          id: '2687983',
          guid: 'https://www.livebitcoinnews.com/?p=55230',
          published_on: 1565002847,
          imageurl: 'https://images.cryptocompare.com/news/livebitcoinnews/8n2qhX675EM.jpeg',
          title:
            'PBET Expanding Offline Casinos to Online Scape Joins LATOKEN Launchpad for Its IEO',
          url: 'https://www.livebitcoinnews.com/pbet-expanding-offline-casinos-to-online-scape-joins-latoken-launchpad-for-its-ieo/',
          source: 'livebitcoinnews',
          body: 'PBET has recently got its IEO hosted at LATOKEN exchange on its multi-asset trading platform. The company envisions to conjoin physical casinos with online casinos, thanks to its blockchain crypto-based Unified Gaming platform. Cyprus, August 5st 2019: Next-gen crypto gaming platform PBET is delighted to announce the launch of its IEO on leading crypto exchange...The post PBET Expanding Offline Casinos to Online Scape Joins LATOKEN Launchpad for Its IEO appeared first on Live Bitcoin News.',
          tags: 'Press Release',
          categories: 'BTC|Exchange|Blockchain|Trading|Sponsored',
          upvotes: '0',
          downvotes: '0',
          lang: 'EN',
          source_info: {
            name: 'Live Bitcoin News',
            lang: 'EN',
            img: 'https://images.cryptocompare.com/news/default/livebitcoinnews.png'
          }
        },
        {
          id: '2687985',
          guid: 'https://dailyhodl.com/?p=60095',
          published_on: 1565002842,
          imageurl: 'https://images.cryptocompare.com/news/dailyhodl/bU9iU30s2j9.jpeg',
          title: 'Litecoin’s Charlie Lee: More ‘Conflict and Pain’ Coming in Crypto Uprising',
          url: 'https://dailyhodl.com/2019/08/05/litecoins-charlie-lee-more-conflict-and-pain-coming-in-crypto-uprising/',
          source: 'dailyhodl',
          body: 'Litecoin creator Charlie Lee weighs in on the debate between cryptocurrency and government-backed fiat currencies in a new interview with crypto artist V E S A. In the wake of comments made by President Donald Trump and Treasury Secretary Steven Mnuchin, who have described cryptocurrencies as tools for criminals who engage in money laundering, tax [&#8230;]The post Litecoin&#8217;s Charlie Lee: More &#8216;Conflict and Pain&#8217; Coming in Crypto Uprising appeared first on The Daily Hodl.',
          tags: 'Altcoins|Bitcoin|Crypto|Litecoin|LTC|mma|News',
          categories: 'LTC|Regulation|BTC|Altcoin|Fiat',
          upvotes: '0',
          downvotes: '0',
          lang: 'EN',
          source_info: {
            name: 'The Daily Hodl',
            lang: 'EN',
            img: 'https://images.cryptocompare.com/news/default/dailyhodl.png'
          }
        },
        {
          id: '2687935',
          guid: 'https://www.newsbtc.com/?p=392218',
          published_on: 1565002840,
          imageurl: 'https://images.cryptocompare.com/news/newsbtc/80000000000.jpeg',
          title: 'Bitcoin Could Hit a New High This Week, Factors And Trends',
          url: 'https://www.newsbtc.com/2019/08/05/bitcoin-could-hit-a-new-high-this-week-factors-and-trends/',
          source: 'newsbtc',
          body: 'Weekend trading for Bitcoin has been bullish but things really started to take off during Asian trading this morning. As BTC tapped a twenty four day high, it is now only $2k away from its 2019 peak and reaching it this week is not out of the question. BTC Taps $11,800 Bitcoin has not looked...The post Bitcoin Could Hit a New High This Week, Factors And Trends  appeared first on NewsBTC.',
          tags: 'Bitcoin|Crypto|bitcoin|china|price|tariffs|trade war|yuan',
          categories: 'BTC|Trading|Asia',
          upvotes: '0',
          downvotes: '0',
          lang: 'EN',
          source_info: {
            name: 'NewsBTC',
            lang: 'EN',
            img: 'https://images.cryptocompare.com/news/default/newsbtc.png'
          }
        },
        {
          id: '2687981',
          guid: 'https://bitcoinist.com/?p=114471',
          published_on: 1565002826,
          imageurl: 'https://images.cryptocompare.com/news/bitcoinist/cH2A0140000.jpeg',
          title: 'Is China Loading Up on Bitcoin as Yuan Gets Crushed?',
          url: 'https://bitcoinist.com/is-china-loading-up-on-bitcoin-as-yuan-gets-crushed/',
          source: 'bitcoinist',
          body: 'Bitcoin has had a monumental morning on the Asian trading session. With a 10 percent surge on the day BTC has reached a three week high while in China, the Yuan collapses to a 10-year low against the greenback. Are the Chinese loading up on bitcoin? Yuan Down Bitcoin Up As we have seen on countless occasions recently, trading in Asia is dictating market movements for bitcoin and cryptocurrencies. Just a few hours ago BTCRead MoreThe post Is China Loading Up on Bitcoin as Yuan Gets Crushed? appeared first on Bitcoinist.com.',
          tags: 'Bitcoin|News|bitcoin|china|RMB|Trump|Yuan',
          categories: 'BTC|Asia|Trading|Market',
          upvotes: '0',
          downvotes: '0',
          lang: 'EN',
          source_info: {
            name: 'Bitcoinist',
            lang: 'EN',
            img: 'https://images.cryptocompare.com/news/default/bitcoinist.png'
          }
        }
      ]
    }

    const wrapper = shallow(<ArticlesList {...nextProps} />)

    it('Render properly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Should render 5 <Article />', () => {
      expect(wrapper.find(Article)).toHaveLength(5)
    })

    it('Should pass right props', () => {
      expect(wrapper.find(Article).at(2).props()).toEqual(nextProps.data[2])
    })
  })
})
