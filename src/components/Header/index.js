import React from 'react';
import { Link } from 'react-router-dom';
import LogReg from './LogReg';
import { withTranslation } from 'react-i18next';
import LanguageSelect from './LanguageSelect';

class Header extends React.Component {
  render() {
    const { t, user, logout, changeLanguage, defaultLanguage } = this.props;
    return (
      <header>
        <nav className="header py-2">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <Link
              className="header__item header__item_light py-2 px-2 d-md-inline-block"
              to="/"
            >
              <span>{t('header.home')}</span>
            </Link>

            <Link
              className="header__item header__item_light py-2 px-2 d-md-inline-block"
              to="/cryptocurrency"
            >
              <span>{t('header.cryptocurrency')}</span>
            </Link>

            <Link
              className="header__item header__item_light py-2 px-2 d-md-inline-block"
              to="/news"
            >
              <span>{t('header.news')}</span>
            </Link>

            <Link
              className="header__item header__item_light py-2 px-2 d-md-inline-block"
              to="/articles"
            >
              <span>{t('header.articles')}</span>
            </Link>

            <div>
              <LanguageSelect
                changeLanguage={changeLanguage}
                defaultLanguage={defaultLanguage}
              />
            </div>

            {user.logined && (
              <Link
                className="header__item header__item_light py-2 px-2 d-md-inline-block"
                to="/settings"
              >
                <span>{t('header.settings')}</span>
              </Link>
            )}

            <div className="log-reg">
              {user.logined && <span>{user.email}</span>}
              {!user.logined ? (
                <LogReg />
              ) : (
                <div className="header__item header__item_light py-2 px-2 d-md-inline-block">
                  <span onClick={() => logout()}>{t('header.logout')}</span>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withTranslation()(Header);
