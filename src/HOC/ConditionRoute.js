import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Wrapper for Route from 'react-router-dom' for autorize access to routes.
 *
 * @param {bool} condition - If false then redirect.
 * @param {number} route - Route to redirect.
 */
const ConditionRoute = ({ condition, route = '/login', ...rest }) =>
  condition === true ? <Route {...rest} /> : <Redirect to={route} />;

export default ConditionRoute;
