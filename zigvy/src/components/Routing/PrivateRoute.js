import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

import * as AuthSelector from "store/auth/selector";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(AuthSelector.getAuthToken);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
