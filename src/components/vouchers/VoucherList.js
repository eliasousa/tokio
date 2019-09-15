import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchVouchers } from "../../actions/vouchers";
import { formatDate } from "../../actions/utils";
import SectionHeader from "../layout/SectionHeader";
import VouchersFilter from "../filters/VouchersFilter";
import VoucherPrint from "./VoucherPrint";
import VoucherListTable from "./VoucherListTable";

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

  renderPrintButton() {
    if (this.props.vouchers.length > 0) {
      return (
        <button className="ui icon button" onClick={() => window.print()}>
          <i className="icon print"></i> Imprimir
        </button>
      );
    } else {
      return (
        <button className="ui icon button disabled">
          <i className="icon print"></i> Imprimir
        </button>
      );
    }
  }

  render() {
    return (
      <>
        <VoucherPrint
          vouchers={this.props.vouchers}
          filterValues={this.state.filterValues}
        />
        <div className="not-print">
          <SectionHeader
            title="Relatório"
            subtitle="Lista de Vouchers"
            icon="list"
          />
          <VouchersFilter onSubmit={this.onFilter} />
          {this.renderPrintButton()}
          <VoucherListTable vouchers={this.props.vouchers} />
        </div>
      </>
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
