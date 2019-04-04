import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { required, email, number } from "../formValidations";
import { phoneMask, cpfMask } from "../formMasks";

class TaxiForm extends Component {
  renderInput = ({
    input,
    label,
    type,
    fieldWidth,
    meta: { touched, error }
  }) => {
    return (
      <div
        className={`${fieldWidth} wide field ${touched && (error && "error")}`}
      >
        <label>{label}</label>
        <input {...input} autoComplete="off" placeholder={label} type={type} />
        {touched &&
          (error && <span style={{ color: "#9f3a38" }}>{error}</span>)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="fields">
          <Field
            name="smtt"
            component={this.renderInput}
            label="SMTT"
            type="number"
            fieldWidth="four"
            validate={[required, number]}
          />
          <Field
            name="email"
            component={this.renderInput}
            label="E-mail"
            type="email"
            fieldWidth="twelve"
            validate={[required, email]}
          />
        </div>
        <div className="fields">
          <Field
            name="cpf"
            component={this.renderInput}
            label="CPF"
            type="text"
            fieldWidth="ten"
            validate={[required]}
            {...cpfMask}
          />
          <Field
            name="phone"
            component={this.renderInput}
            label="Telefone"
            type="tel"
            fieldWidth="six"
            validate={[required]}
            {...phoneMask}
          />
        </div>
        <div className="fields">
          <Field
            name="encrypted_password"
            component={this.renderInput}
            label="Senha"
            type="text"
            fieldWidth="ten"
            validate={this.props.validatePassword && required}
          />
          <div className="six wide field">
            <label>Status</label>
            <Field name="active" className="ui dropdown" component="select">
              <option value="true">Ativo</option>
              <option value="false">Inativo</option>
            </Field>
          </div>
        </div>
        <div className="ui right floated buttons" style={{ marginTop: "10px" }}>
          <button
            className="ui button green"
            disabled={this.props.pristine || this.props.submitting}
          >
            <i className="save icon" /> Salvar
          </button>
          <div className="or" data-text="ou" />
          <Link to="/taxis" className="ui button">
            <i className="redo icon" /> Voltar
          </Link>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "taxiForm"
})(TaxiForm);
