import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const required = value =>
  value || typeof value === "number" ? undefined : "campo obrigatório";
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "e-mail invalido"
    : undefined;

class AdminForm extends Component {
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
        <Field
          name="name"
          component={this.renderInput}
          label="Nome"
          type="text"
          fieldWidth="sixteen"
          validate={required}
        />
        <div className="fields">
          <Field
            name="email"
            component={this.renderInput}
            label="E-mail"
            type="email"
            fieldWidth="ten"
            validate={[required, email]}
          />

          <Field
            name="phone"
            component={this.renderInput}
            label="Telefone"
            type="number"
            fieldWidth="six"
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
        <Link to="/admins" className="ui right floated button">
          <i className="redo icon" /> Voltar
        </Link>
        <button
          className="ui right floated button green"
          disabled={this.props.pristine || this.props.submitting}
        >
          <i className="save icon" /> Salvar
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "adminForm"
})(AdminForm);
