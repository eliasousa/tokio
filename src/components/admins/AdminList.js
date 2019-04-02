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
      <div>
        <Link
          to={`/admins/${admin.id}/edit`}
          className="ui button inverted primary"
        >
          <i className="edit icon" /> Editar
        </Link>
        <Link
          to={`/admins/${admin.id}/delete`}
          className="ui button inverted red"
        >
          <i className="eraser icon" />
          Deletar
        </Link>
      </div>
    );
  }

  renderTable() {
    return this.props.admins.map(admin => {
      return (
        <tr key={admin.id}>
          <td>{admin.name}</td>
          <td>{admin.email}</td>
          <td>{admin.active ? "Sim" : "Não"}</td>
          <td className="right aligned">{this.renderActions(admin)}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 className="ui header">
          <i className="address book outline icon" />
          <div className="content">
            Admins
            <div className="sub header">Gerenciamento dos Administradores</div>
          </div>
        </h2>
        <table className="ui black striped unstackable table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Ativo</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
          <tfoot className="full-width">
            <tr>
              <th colSpan="4">
                <Link to="/admins/new" className="ui right floated blue button">
                  <i className="plus icon" /> Novo
                </Link>
              </th>
            </tr>
          </tfoot>
        </table>
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
