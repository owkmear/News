import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Cryptocurrency from '../components/Cryptocurrency';
import News from '../components/News';
import Articles from '../components/Articles';
import Login from '../components/Login';
import Registration from '../components/Registration';
import Storybook from '../components/Storybook';
import Settings from '../components/Settings';

import ConditionRoute from '../HOC/ConditionRoute';

const Routes = props => {
  const { user } = props;

  return (
    <Switch>
      <Route exact path="/" render={() => <Home {...props} />} />
      <Route
        exact
        path="/cryptocurrency"
        render={() => <Cryptocurrency {...props} />}
      />
      <Route exact path="/news" render={() => <News {...props} />} />
      <Route exact path="/articles" render={() => <Articles {...props} />} />
      <ConditionRoute
        exact
        path="/login"
        condition={!user.logined}
        route="/"
        render={() => <Login {...props} />}
      />
      <ConditionRoute
        exact
        path="/registration"
        condition={!user.logined}
        route="/"
        render={() => <Registration {...props} />}
      />
      <ConditionRoute
        exact
        path="/settings"
        condition={user.logined}
        render={() => <Settings {...props} />}
      />
      <Route exact path="/storybook" render={() => <Storybook {...props} />} />
    </Switch>
  );
};

export default Routes;