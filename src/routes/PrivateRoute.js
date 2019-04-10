import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated, isAdmin, isCompany } from "../services/auth";
import Layout from "../components/layout/Layout";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Layout isAuthenticated isAdmin={isAdmin()} isCompany={isCompany()}>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
