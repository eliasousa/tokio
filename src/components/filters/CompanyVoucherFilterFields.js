import React, { Component } from "react";

import SectorSelect from "../employees/SectorsSelect";
import EmployeesSelect from "../vouchers/EmployeesSelect";

export default class CompanyVoucherFilterFields extends Component {
  render() {
    return (
      <>
        <div className="four wide field">
          <SectorSelect />
        </div>
        <div className="four wide field">
          <EmployeesSelect />
        </div>
      </>
    );
  }
}
