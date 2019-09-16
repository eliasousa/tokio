import React, { Component } from "react";
import { Field } from "redux-form";

import TaxisSelect from "../vouchers/TaxisSelect";

export default class PaymentFilterFields extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}
