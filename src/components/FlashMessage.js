import React, { Component } from "react";
import { connect } from "react-redux";
import { getLatestMessage } from "redux-flash";

class FlashMessage extends Component {
  render() {
    if (!this.props.flash) return null;

    const { message, isError } = this.props.flash;

    return (
      <div className={`ui ${isError ? "red" : "green"} message`}>{message}</div>
    );
  }
}

const mapStateToProps = state => {
  return { flash: getLatestMessage(state) };
};

export default connect(mapStateToProps)(FlashMessage);
