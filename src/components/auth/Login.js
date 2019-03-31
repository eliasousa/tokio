import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { authenticate } from "../../actions/auth";

class Login extends Component {
  renderInput = ({ input, label, type }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" placeholder={label} type={type} />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.authenticate(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="email"
          component={this.renderInput}
          label="E-mail"
          type="text"
        />

        <Field
          name="password"
          component={this.renderInput}
          label="Senha"
          type="password"
        />
        <button
          className="ui button primary"
          disabled={this.props.pristine || this.props.submitting}
        >
          Entrar
        </button>
      </form>
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
