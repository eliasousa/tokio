import React, { Component } from "react";
import { Field } from "redux-form";

import { renderInput, renderDatePicker } from "../formHelpers";
import SectorSelect from "../employees/SectorsSelect";
import EmployeesSelect from "./EmployeesSelect";

export default class CompanyVoucherFilterFields extends Component {
  render() {
    return (
      <>
        <div className="fields">
          <Field
            name="voucher_id"
            component={renderInput}
            label="Voucher"
            type="number"
            fieldWidth="four"
          />
          <div className="four wide field">
            <SectorSelect />
          </div>
          <div className="four wide field">
            <EmployeesSelect />
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
