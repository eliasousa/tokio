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
        <div className="ui buttons">
          <button
            onClick={() => this.props.deleteAdmin(id)}
            className="ui button negative"
          >
            <i className="eraser icon" /> Deletar
          </button>
          <div className="or" data-text="ou" />
          <Link to="/admins" className="ui button">
            <i className="redo icon" /> Cancelar
          </Link>
        </div>
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
