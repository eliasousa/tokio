import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { isAuthenticated, logoutUser, isAdmin } from "../apis/auth";

class Header extends Component {
  render() {
    const { isAuthenticated, isAdmin } = this.props;

    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          GoVoucher
        </Link>

        {isAuthenticated && (
          <div className="right menu">
            {isAdmin && (
              <div className="right menu">
                <Link to="/admins" className="item">
                  Admins
                </Link>
              </div>
            )}
            <Link to="/login" onClick={logoutUser} className="item">
              Sair
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = () => {
  return { isAuthenticated: isAuthenticated(), isAdmin: isAdmin() };
};

export default connect(mapStateToProps)(Header);
