import React, { Component } from "react";
import { Field } from "redux-form";

import { renderDatePicker } from "../formHelpers";

export default class TaxiVoucherFilterFields extends Component {
  render() {
    return (
      <>
        <div className="fields">
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
