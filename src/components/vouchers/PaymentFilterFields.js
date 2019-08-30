import React, { Component } from "react";
import { Field } from "redux-form";

import TaxisSelect from "./TaxisSelect";
import { renderDatePicker } from "../formHelpers";

export default class PaymentFilterFields extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}
