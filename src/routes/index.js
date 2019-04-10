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

import SectorList from "../components/sectors/SectorList";
import SectorCreate from "../components/sectors/SectorCreate";
import SectorEdit from "../components/sectors/SectorEdit";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import CompanyRoute from "./CompanyRoute";

import Layout from "../components/layout/Layout";

const Routes = () => (
  <Router history={history}>
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

      <CompanyRoute exact path="/sectors" component={SectorList} />
      <CompanyRoute exact path="/sectors/new" component={SectorCreate} />
      <CompanyRoute exact path="/sectors/:id/edit" component={SectorEdit} />

      <Route
        exact
        path="/login"
        component={() => (
          <Layout>
            <Login />
          </Layout>
        )}
      />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>
);

export default Routes;
