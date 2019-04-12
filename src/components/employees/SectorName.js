import { Component } from "react";
import { connect } from "react-redux";

class SectorName extends Component {
  render() {
    const { sector } = this.props;

    if (!sector) return "";

    return sector.name;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { sector: state.sectors[ownProps.sectorId] };
};

export default connect(mapStateToProps)(SectorName);
