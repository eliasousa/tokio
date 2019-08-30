import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../actions/auth";

class Header extends Component {
  render() {
    const { isAuthenticated, isAdmin, isCompany, logout } = this.props;

    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <Link to="/" className="header item">
            <i className="address card icon" />
            GoVoucher
          </Link>

          {isAuthenticated && (
            <div className="right menu">
              <div className="right menu">
                <Link to="/vouchers" className="item">
                  <i className="address card icon" />
                  Vouchers
                </Link>
              </div>
              {isAdmin && (
                <>
                  <div className="right menu">
                    <Link to="/vouchers/payment" className="item">
                      <i className="money bill alternate outline icon" />
                      Pagamento
                    </Link>
                  </div>
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
              {isCompany && (
                <>
                  <div className="right menu">
                    <Link to="/sectors" className="item">
                      <i className="sitemap icon" /> Setores
                    </Link>
                  </div>
                  <div className="right menu">
                    <Link to="/employees" className="item">
                      <i className="users icon" /> Funcionários
                    </Link>
                  </div>
                </>
              )}
              <Link to="/login" onClick={logout} className="item">
                <i className="sign-out icon" /> Sair
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(Header);
