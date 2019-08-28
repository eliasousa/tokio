import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

import { fetchTaxis } from "../../actions/taxis";

class TaxisSelect extends Component {
  componentDidMount() {
    this.props.fetchTaxis();
  }

  render() {
    const { taxis } = this.props;

    if (!taxis) return "carregando...";

    return (
      <>
        <label>SMTT</label>
        <Field name="taxi_id" className="ui dropdown" component="select">
          <option value="">Selecione</option>
          {taxis.map(taxi => {
            return (
              <option key={taxi.id} value={taxi.id}>
                {taxi.smtt}
              </option>
            );
          })}
        </Field>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { taxis: Object.values(state.taxis) };
};

export default connect(
  mapStateToProps,
  { fetchTaxis }
)(TaxisSelect);
