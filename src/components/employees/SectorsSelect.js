import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

import { fetchSectors } from "../../actions/sectors";

class SectorsSelect extends Component {
  componentDidMount() {
    this.props.fetchSectors();
  }

  render() {
    const { sectors } = this.props;

    if (!sectors) return "carregando...";

    return (
      <>
        <label>Setor</label>
        <Field name="sector_id" className="ui dropdown" component="select">
          <option value="">Selecione</option>
          {sectors.map(sector => {
            return (
              <option key={sector.id} value={sector.id}>
                {sector.name}
              </option>
            );
          })}
        </Field>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { sectors: Object.values(state.sectors) };
};

export default connect(
  mapStateToProps,
  { fetchSectors }
)(SectorsSelect);
