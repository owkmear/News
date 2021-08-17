import React from 'react';
import { getCurrenciesList } from '../../store/actions/currencies';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import { withTranslation } from 'react-i18next';
import './Cryptocurrency.sass';

class Cryptocurrency extends React.Component {
  componentWillMount() {
    this.props.getCurrenciesList();
  }
  render() {
    const { t, data, isLoading, errorMessage } = this.props;

    const currencyTable = data.map(currency => (
      <tr key={currency.symbol}>
        <td>{currency.name}</td>
        <td>${currency.quote.USD.market_cap}</td>
        <td>${currency.quote.USD.price}</td>
        <td>${currency.quote.USD.volume_24h} $</td>
        <td>
          {currency.circulating_supply} {currency.symbol}
        </td>
        <td>{currency.quote.USD.percent_change_24h}%</td>
      </tr>
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            <div className="shadow-box shadow-box_round-big">
              <div className="shadow-box__inner d-flex flex-column">
                <section className="cryptocurrency">
                  <div className="row">
                    <div className="col">
                      <h2 className="block__header">
                        {t('cryptocurrency.top')}
                      </h2>
                      {isLoading ? (
                        <div className="d-flex justify-content-center">
                          <Spinner />
                        </div>
                      ) : errorMessage !== null ? (
                        <div>{errorMessage}</div>
                      ) : data.length > 0 ? (
                        <table>
                          <thead>
                            <tr>
                              <th>{t('cryptocurrency.name')}</th>
                              <th>{t('cryptocurrency.market cap')}</th>
                              <th>{t('cryptocurrency.price')}</th>
                              <th>{t('cryptocurrency.volume')}</th>
                              <th>{t('cryptocurrency.sypply')}</th>
                              <th>{t('cryptocurrency.change')}</th>
                            </tr>
                          </thead>
                          <tbody>{currencyTable}</tbody>
                        </table>
                      ) : (
                        <p className="news__empty">
                          {t('cryptocurrency.no news')}
                        </p>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.currencies.data,
    isLoading: state.currencies.isLoading,
    errorMessage: state.currencies.errorMessage,
  };
};

const mapDispatchToProps = {
  getCurrenciesList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Cryptocurrency));
