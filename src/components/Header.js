import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { isAuthenticated, logoutUser } from "../apis/auth";

class Header extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          GoVoucher
        </Link>

        {isLoggedIn && (
          <div className="right menu">
            <Link to="/admins" className="item">
              Admins
            </Link>
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
  return { isLoggedIn: isAuthenticated() };
};

export default connect(mapStateToProps)(Header);
