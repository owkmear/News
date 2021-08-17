import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

class Footer extends React.Component {
  render() {
    const { t } = this.props
    return (
      <footer>
        <div className="container d-flex flex-column flex-md-row justify-content-between pt-4">
          <div className="col-md-2">
            <div className="row">
              <Link className="footer__link pb-2" to="/">
                <span>{t('footer.home')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/cryptocurrency">
                <span>{t('footer.cryptocurrency')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/news">
                <span>{t('footer.news')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/articles">
                <span>{t('footer.articles')}</span>
              </Link>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <Link className="footer__link pb-2" to="/">
                <span>{t('footer.home')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/cryptocurrency">
                <span>{t('footer.cryptocurrency')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/news">
                <span>{t('footer.news')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/articles">
                <span>{t('footer.articles')}</span>
              </Link>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <Link className="footer__link pb-2" to="/">
                <span>{t('footer.home')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/cryptocurrency">
                <span>{t('footer.cryptocurrency')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/news">
                <span>{t('footer.news')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/articles">
                <span>{t('footer.articles')}</span>
              </Link>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <Link className="footer__link pb-2" to="/">
                <span>{t('footer.home')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/cryptocurrency">
                <span>{t('footer.cryptocurrency')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/news">
                <span>{t('footer.news')}</span>
              </Link>
            </div>
            <div className="row">
              <Link className="footer__link pb-2" to="/articles">
                <span>{t('footer.articles')}</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default withTranslation()(Footer)
