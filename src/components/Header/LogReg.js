import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class LogReg extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <Fragment>
        <Link className="header__item header__item_light py-2 px-2 d-md-inline-block" to="/login">
          <span>{t('header.login')}</span>
        </Link>
        <Link className="header__item header__item_light py-2 px-2 d-md-inline-block" to="/registration">
          <span>{t('header.registration')}</span>
        </Link>
      </Fragment>
    );
  }
};

export default withTranslation()(LogReg);