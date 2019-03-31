import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchAdmin, deleteAdmin } from "../../actions/admins";

class AdminDelete extends React.Component {
  componentDidMount() {
    this.props.fetchAdmin(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteAdmin(id)}
          className="ui button negative"
        >
          Deletar
        </button>
        <Link to="/admins" className="ui button">
          Cancelar
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.admin) {
      return "Tem certeza que deseja deletar esse admin?";
    }

    return `Tem certeza que deseja deletar o admin ${this.props.admin.name}?`;
  }

  render() {
    return (
      <Modal
        title="Deletar Admin"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/admins")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { admin: state.admins[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchAdmin, deleteAdmin }
)(AdminDelete);
