import React from 'react';
import './Partners.sass';

class Partners extends React.Component {
  render() {
    return (
      <div className="partners">
        <div className="partners__block">
          <a
            rel="nofollow"
            href="http://bitcoinist.com/indacoin-buying-bitcoin-credit-card/"
          >
            <span className="sprite-wrapper">
              <i className="partners-blue partners-blue-1"></i>
            </span>
          </a>
        </div>

        <div className="four wide computer eight wide tablet sixteen wide mobile column">
          <a
            rel="nofollow"
            href="http://www.ewdn.com/2017/09/25/this-app-aims-to-simplify-transactions-with-more-than-200-cryptocurrencies/"
          >
            <span className="sprite-wrapper">
              <i className="partners-blue partners-blue-2"></i>
            </span>
          </a>
        </div>

        <div className="four wide computer eight wide tablet sixteen wide mobile column">
          <a
            rel="nofollow"
            href="https://www.cryptocoinsnews.com/indacoin-mobile-wallet-operate-200-cryptocurrencies-using-one-app/"
          >
            <span className="sprite-wrapper">
              <i className="partners-blue partners-blue-3"></i>
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default Partners;
