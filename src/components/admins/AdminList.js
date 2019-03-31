import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAdmins } from "../../actions/admins";

class AdminList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderActions(admin) {
    return (
      <div className="right floated content">
        <Link to={`/admins/${admin.id}/edit`} className="ui button primary">
          Edit
        </Link>
        <Link to={`/admins/${admin.id}/delete`} className="ui button negative">
          Delete
        </Link>
      </div>
    );
  }

  renderList() {
    return this.props.admins.map(admin => {
      return (
        <div className="item" key={admin.id}>
          {this.renderActions(admin)}
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="header">{admin.name}</div>
            <div className="description">{admin.email}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Admins</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: "right" }}>
          <Link to="/admins/new" className="ui button primary">
            Add Admin
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    admins: Object.values(state.admins)
  };
};

export default connect(
  mapStateToProps,
  { fetchAdmins }
)(AdminList);
