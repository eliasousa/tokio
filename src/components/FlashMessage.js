import React, { Component } from "react";
import { connect } from "react-redux";
import ReactFlashMessage from "react-flash-message";

class FlashMessage extends Component {
  render() {
    const { message, className } = this.props.flashMessage;

    if (!message) {
      return null;
    }

    return (
      <ReactFlashMessage duration={5000}>
        <div className={`ui ${className} message`}>{message}</div>
      </ReactFlashMessage>
    );
  }
}

const mapStateToProps = ({ flashMessage }) => {
  return { flashMessage };
};

export default connect(mapStateToProps)(FlashMessage);
