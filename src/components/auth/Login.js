import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { authenticate } from "../../actions/auth";

class Login extends Component {
  renderInput = ({ input, label, type, icon }) => {
    return (
      <div className="field">
        <div className="ui left icon input">
          <i className={`${icon} icon`} />
          <input {...input} placeholder={label} type={type} />
        </div>
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.authenticate(formValues);
  };

  render() {
    return (
      <div className="ui three column grid" style={{ marginTop: "7em" }}>
        <div className="column" />
        <div className="column">
          <h2 className="ui center aligned icon header">
            <i className="address card icon" />
            Faça login no GoVoucher
          </h2>
          <form
            className="ui form large"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <div className="ui stacked segment">
              <Field
                name="email"
                component={this.renderInput}
                label="E-mail"
                type="text"
                icon="user"
              />

              <Field
                name="password"
                component={this.renderInput}
                label="Senha"
                type="password"
                icon="lock"
              />
              <button
                className="ui fluid large submit button green"
                disabled={this.props.pristine || this.props.submitting}
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
        <div className="column" />
      </div>
    );
  }
}

export default connect(
  null,
  { authenticate }
)(
  reduxForm({
    form: "login"
  })(Login)
);
