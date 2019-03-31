import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Login from "../components/auth/Login";
import AdminList from "../components/admins/AdminList";
import AdminCreate from "../components/admins/AdminCreate";
import AdminEdit from "../components/admins/AdminEdit";
import AdminDelete from "../components/admins/AdminDelete";
import history from "../history";
import Header from "../components/Header";
import FlashMessage from "../components/FlashMessage";
import { isAuthenticated, isAdmin } from "../apis/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        isAdmin() ? (
          <Component {...props} />
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

const Routes = () => (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <FlashMessage />
        <Switch>
          <PrivateRoute exact path="/" component={() => <h1>Dashboard</h1>} />

          <AdminRoute path="/admins" exact component={AdminList} />
          <AdminRoute path="/admins/new" exact component={AdminCreate} />
          <AdminRoute path="/admins/:id/edit" exact component={AdminEdit} />
          <AdminRoute path="/admins/:id/delete" exact component={AdminDelete} />

          <Route path="/login" exact component={Login} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default Routes;