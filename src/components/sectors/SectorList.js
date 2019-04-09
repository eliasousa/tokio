import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCurrentId } from "../../services/auth";
import { fetchSectors } from "../../actions/sectors";
import SectionHeader from "../layout/SectionHeader";

class SectorList extends Component {
  componentDidMount() {
    this.props.fetchSectors(this.props.companyId);
  }

  renderActions(sector) {
    return (
      <div>
        <Link
          to={`/sectors/${sector.id}/edit`}
          className="ui button inverted primary"
        >
          <i className="edit icon" /> Editar
        </Link>
      </div>
    );
  }

  renderTable() {
    return this.props.sectors.map(sector => {
      return (
        <tr key={sector.id}>
          <td>{sector.name}</td>
          <td className="right aligned">{this.renderActions(sector)}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <SectionHeader
          title="Setores"
          subtitle="Gerenciamento dos Setores"
          icon="sitemap"
        />
        <table className="ui black striped unstackable table">
          <thead>
            <tr>
              <th>Nome</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
          <tfoot className="full-width">
            <tr>
              <th colSpan="4">
                <Link
                  to="/sectors/new"
                  className="ui right floated blue button"
                >
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
    sectors: Object.values(state.sectors),
    companyId: getCurrentId()
  };
};

export default connect(
  mapStateToProps,
  { fetchSectors, getCurrentId }
)(SectorList);
