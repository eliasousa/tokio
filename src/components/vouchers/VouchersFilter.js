import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { renderDatePicker } from "../formHelpers";
import TaxisSelect from "./TaxisSelect";

class VouchersFilter extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="ui piled segment">
        <h4 className="ui header">Filtros</h4>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="fields">
            <div className="four wide field">
              <label>Situação</label>
              <Field name="paid" className="ui dropdown" component="select">
                <option value="false">Aberto</option>
                <option value="true">Pago</option>
              </Field>
            </div>
            <div className="four wide field">
              <TaxisSelect />
            </div>
            <div className="four wide field">
              <label>Data Inicio</label>
              <Field name="created_start_at" component={renderDatePicker} />
            </div>
            <div className="four wide field">
              <label>Data Fim</label>
              <Field name="created_end_at" component={renderDatePicker} />
            </div>
          </div>
          <div className="ui right floated">
            <button
              type="submit"
              className="ui button blue"
              disabled={this.props.submitting}
            >
              <i className="filter icon" /> Filtrar
            </button>
            <button
              type="button"
              className="ui button"
              disabled={this.props.submitting}
              onClick={this.props.reset}
            >
              <i className="magic icon" /> Limpar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "vouchersFilter"
})(VouchersFilter);
