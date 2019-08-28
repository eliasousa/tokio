import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchVouchers, payVouchers } from "../../actions/vouchers";
import SectionHeader from "../layout/SectionHeader";
import VoucherTaxiAccordions from "./VoucherTaxiAccordions";
import VouchersFilter from "./VouchersFilter";

class VoucherPayment extends Component {
  state = { checkedIds: [] };

  componentDidMount() {
    this.props.fetchVouchers({ paid: false });
  }

  onChecked = e => {
    const { checkedIds: ids } = this.state;

    if (e.target.checked) {
      ids.push(+e.target.id);
    } else {
      let index = ids.indexOf(+e.target.id);
      ids.splice(index, 1);
    }

    this.setState({ checkedIds: ids });
  };

  onSubmit = () => {
    this.props.payVouchers(this.state.checkedIds);
  };

  onFilter = filterValues => {
    this.props.fetchVouchers(filterValues);
  };

  render() {
    const taxis = _(this.props.vouchers)
      .groupBy(x => x.taxi.smtt)
      .map((value, key) => ({ smtt: key, vouchers: value }))
      .value();

    return (
      <div>
        <SectionHeader
          title="Pagamento"
          subtitle="Gerenciamento de pagamento de vouchers"
          icon="money"
        />
        <VouchersFilter onSubmit={this.onFilter} />
        <VoucherTaxiAccordions
          taxis={taxis}
          onChecked={this.onChecked}
          onSubmit={this.onSubmit}
        />
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
  { fetchVouchers, payVouchers }
)(VoucherPayment);
