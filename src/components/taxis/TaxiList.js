import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { fetchTaxis } from "../../actions/taxis";
import SectionHeader from "../layout/SectionHeader";

class TaxiList extends Component {
  componentDidMount() {
    this.props.fetchTaxis();
  }

  renderActions(taxi) {
    return (
      <div>
        <Link
          to={`/taxis/${taxi.id}/edit`}
          className="ui button inverted primary"
        >
          <i className="edit icon" /> Editar
        </Link>
      </div>
    );
  }

  renderTable() {
    return _.sortBy(this.props.taxis, ["smtt"]).map(taxi => {
      return (
        <tr key={taxi.id}>
          <td>{taxi.smtt}</td>
          <td>{taxi.email}</td>
          <td>{taxi.active ? "Sim" : "Não"}</td>
          <td className="right aligned">{this.renderActions(taxi)}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <SectionHeader
          title="Taxis"
          subtitle="Gerenciamento dos Taxis"
          icon="taxi"
        />
        <table className="ui black striped unstackable table">
          <thead>
            <tr>
              <th>SMTT</th>
              <th>Email</th>
              <th>Ativo</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
          <tfoot className="full-width">
            <tr>
              <th colSpan="4">
                <Link to="/taxis/new" className="ui right floated blue button">
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
    taxis: Object.values(state.taxis)
  };
};

export default connect(
  mapStateToProps,
  { fetchTaxis }
)(TaxiList);
