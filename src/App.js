import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import i18n from './utils/i18n';
import Layout from './components/Layout';
import { loadData } from './store/actions/ui';
import { logout } from './store/actions/user';

class App extends React.Component {
  componentDidMount() {
    this.props.loadData();
    var f =   234;
  }

  changeLanguage = lang => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  };

  render() {
    return (
      <Suspense fallback="loading">
        <Layout
          {...this.props}
          changeLanguage={this.changeLanguage}
          defaultLanguage={i18n.language}
        />
        ;
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
  loadData,
  logout,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);