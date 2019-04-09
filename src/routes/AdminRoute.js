import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated, isAdmin } from "../services/auth";
import Layout from "../components/layout/Layout";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        isAdmin() ? (
          <Layout isAuthenticated isAdmin>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default AdminRoute;
