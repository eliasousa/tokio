import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchVouchers } from "../../actions/vouchers";
import SectionHeader from "../layout/SectionHeader";
import VouchersFilter from "../filters/VouchersFilter";
import VouchersPdf from "./VouchersPdf";
import {
  formatCurrency,
  formatDatetime,
  formatDate
} from "../../actions/utils";

class VoucherList extends Component {
  state = { filterValues: {} };

  componentDidMount() {
    this.props.fetchVouchers();
  }

  onFilter = filterValues => {
    let filterParams = filterValues;

    if (filterValues.created_start_at !== undefined) {
      filterParams = {
        ...filterParams,
        created_start_at: formatDate(filterParams.created_start_at)
      };
    }

    if (filterValues.created_end_at !== undefined) {
      filterParams = {
        ...filterParams,
        created_end_at: formatDate(filterParams.created_end_at)
      };
    }

    this.setState({ filterValues: filterParams });
    this.props.fetchVouchers(filterValues);
  };

  renderTable() {
    return this.props.vouchers.map(voucher => {
      return (
        <tr key={voucher.id}>
          <td>{voucher.id}</td>
          <td>{formatDatetime(voucher.inserted_at)}</td>
          <td>{voucher.taxi.smtt}</td>
          <td>{voucher.company.name}</td>
          <td>{voucher.employee.name}</td>
          <td>{voucher.from}</td>
          <td>{voucher.to}</td>
          <td>{formatCurrency(voucher.value)}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <SectionHeader
          title="Relatório"
          subtitle="Lista de Vouchers"
          icon="list"
        />
        <VouchersPdf
          vouchers={this.props.vouchers}
          filterValues={this.state.filterValues}
        />
        <VouchersFilter onSubmit={this.onFilter} />
        <table className="ui black striped unstackable table">
          <thead>
            <tr>
              <th>#</th>
              <th>Data</th>
              <th>Taxi</th>
              <th>Empresa</th>
              <th>Funcionário</th>
              <th>Origem</th>
              <th>Destino</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vouchers: Object.values(state.vouchers)
  };
};

export default connect(
  mapStateToProps,
  { fetchVouchers }
)(VoucherList);
