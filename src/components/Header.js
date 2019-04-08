import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { isAuthenticated, logoutUser, isAdmin } from "../services/auth";

class Header extends Component {
  render() {
    const { isAuthenticated, isAdmin } = this.props;

    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <Link to="/" className="header item">
            <i className="address card icon" />
            GoVoucher
          </Link>

          {isAuthenticated && (
            <div className="right menu">
              {isAdmin && (
                <>
                  <div className="right menu">
                    <Link to="/admins" className="item">
                      <i className="address book outline icon" /> Admins
                    </Link>
                  </div>
                  <div className="right menu">
                    <Link to="/taxis" className="item">
                      <i className="taxi icon" /> Taxis
                    </Link>
                  </div>
                  <div className="right menu">
                    <Link to="/companies" className="item">
                      <i className="building outline icon" /> Empresas
                    </Link>
                  </div>
                </>
              )}
              <Link to="/login" onClick={logoutUser} className="item">
                <i className="sign-out icon" /> Sair
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return { isAuthenticated: isAuthenticated(), isAdmin: isAdmin() };
};

export default connect(mapStateToProps)(Header);
