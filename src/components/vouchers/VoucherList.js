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
    const { created_start_at, created_end_at } = filterValues;

    this.setState({
      filterValues: {
        ...filterValues,
        ...(created_start_at && {
          created_start_at: formatDate(created_start_at)
        }),
        ...(created_end_at && { created_end_at: formatDate(created_end_at) })
      }
    });

    this.props.fetchVouchers(filterValues);
  };

  render() {
    return (
      <>
        <div className="print">
          <VoucherPrint
            vouchers={this.props.vouchers}
            filterValues={this.state.filterValues}
          />
        </div>
        <div className="not-print">
          <SectionHeader
            title="Relatório"
            subtitle="Lista de Vouchers"
            icon="list"
          />
          <VouchersFilter onSubmit={this.onFilter} />
          <button
            className="ui icon button"
            disabled={this.props.vouchers.length === 0}
            onClick={() => window.print()}
          >
            <i className="icon print"></i> Imprimir
          </button>
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
