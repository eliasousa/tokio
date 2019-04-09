import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated, isCompany } from "../services/auth";
import Layout from "../components/layout/Layout";

const CompanyRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        isCompany() ? (
          <Layout isAuthenticated isCompany>
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

export default CompanyRoute;
