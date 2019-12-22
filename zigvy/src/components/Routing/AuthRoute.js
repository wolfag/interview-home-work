import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

import * as AuthSelector from "store/auth/selector";

function AuthRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(AuthSelector.getAuthToken);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Redirect to="/blogs" /> : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;
