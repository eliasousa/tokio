import React, { Component } from "react";
import { connect } from "react-redux";

import { getCurrentId } from "../../services/auth";
import { fetchSector, updateSector } from "../../actions/sectors";
import SectorForm from "./SectorForm";
import SectionHeader from "../layout/SectionHeader";

class SectorEdit extends Component {
  componentDidMount() {
    this.props.fetchSector(this.props.companyId, this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateSector(
      this.props.companyId,
      this.props.match.params.id,
      formValues
    );
  };

  render() {
    return (
      <div>
        <SectionHeader
          title="Editar Setor"
          subtitle="Gerenciamento dos Setores"
          icon="sitemap"
        />
        <SectorForm
          initialValues={this.props.sector}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sector: state.sectors[ownProps.match.params.id],
    companyId: getCurrentId()
  };
};

export default connect(
  mapStateToProps,
  { fetchSector, updateSector, getCurrentId }
)(SectorEdit);
