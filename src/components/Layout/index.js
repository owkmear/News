import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../routes';
import GridSpinner from '../Spinner/GridSpinner';
import './Layout.sass';

const Layout = props => {
  return props.ui.dataLoaded ? (
    <div className="wrapper d-flex flex-column">
      <Header {...props} />
      <main className="flex-fill">
        <Routes {...props} />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="layout">
      <GridSpinner />
    </div>
  );
};
export default Layout;
