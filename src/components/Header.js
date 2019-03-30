import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        GoVoucher
      </Link>

      <div className="right menu">
        <Link to="/admins" className="item">
          Admins
        </Link>
      </div>
    </div>
  );
};

export default Header;
