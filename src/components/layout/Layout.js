import React from "react";

import Header from "../Header";
import FlashMessage from "../FlashMessage";

const Layout = ({ children, isAuthenticated, isAdmin, isCompany }) => (
  <div>
    <Header
      isAuthenticated={isAuthenticated}
      isAdmin={isAdmin}
      isCompany={isCompany}
    />
    <div className="ui main container" style={{ marginTop: "5em" }}>
      <FlashMessage />
      {children}
    </div>
  </div>
);

export default Layout;
