import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Login from "../components/auth/Login";

import AdminList from "../components/admins/AdminList";
import AdminCreate from "../components/admins/AdminCreate";
import AdminEdit from "../components/admins/AdminEdit";
import AdminDelete from "../components/admins/AdminDelete";

import TaxiList from "../components/taxis/TaxiList";
import TaxiCreate from "../components/taxis/TaxiCreate";
import TaxiEdit from "../components/taxis/TaxiEdit";

import CompanyList from "../components/companies/CompanyList";
import CompanyCreate from "../components/companies/CompanyCreate";
import CompanyEdit from "../components/companies/CompanyEdit";

import Header from "../components/Header";
import FlashMessage from "../components/FlashMessage";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const Routes = () => (
  <Router history={history}>
    <Header />
    <div className="ui main container" style={{ marginTop: "5em" }}>
      <FlashMessage />
      <Switch>
        <PrivateRoute exact path="/" component={() => <h1>Dashboard</h1>} />

        <AdminRoute exact path="/admins" component={AdminList} />
        <AdminRoute exact path="/admins/new" component={AdminCreate} />
        <AdminRoute exact path="/admins/:id/edit" component={AdminEdit} />
        <AdminRoute exact path="/admins/:id/delete" component={AdminDelete} />

        <AdminRoute exact path="/taxis" component={TaxiList} />
        <AdminRoute exact path="/taxis/new" component={TaxiCreate} />
        <AdminRoute exact path="/taxis/:id/edit" component={TaxiEdit} />

        <AdminRoute exact path="/companies" component={CompanyList} />
        <AdminRoute exact path="/companies/new" component={CompanyCreate} />
        <AdminRoute exact path="/companies/:id/edit" component={CompanyEdit} />

        <Route exact path="/login" component={Login} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
