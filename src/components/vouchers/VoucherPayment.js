import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchVouchers, payVouchers } from "../../actions/vouchers";
import VoucherTaxiAccordions from "./VoucherTaxiAccordions";

class VoucherPayment extends Component {
  state = { checkedIds: [] };

  componentDidMount() {
    this.props.fetchVouchers();
  }

  onChecked = e => {
    const ids = this.state.checkedIds;
    let index;

    if (e.target.checked) {
      ids.push(+e.target.id);
    } else {
      index = ids.indexOf(+e.target.id);
      ids.splice(index, 1);
    }

    this.setState({ checkedIds: ids });
  };

  onSubmit = e => {
    this.props.payVouchers(this.state.checkedIds);
  };

  render() {
    const taxis = _(this.props.vouchers)
      .groupBy(x => x.taxi.smtt)
      .map((value, key) => ({ smtt: key, vouchers: value }))
      .value();

    return (
      <VoucherTaxiAccordions
        taxis={taxis}
        onChecked={this.onChecked}
        onSubmit={this.onSubmit}
      />
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
