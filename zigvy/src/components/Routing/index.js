import React from "react";
import { Route, Switch } from "react-router";

import Blogs from "components/Blog";
import Profile from "components/Profile";

const routes = [
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/blogs",
    component: Blogs
  },
  {
    path: "/",
    component: Blogs
  }
];

function Router(props) {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} path={route.path} component={route.component} />
      ))}
    </Switch>
  );
}

export default Router;
