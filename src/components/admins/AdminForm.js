import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { required, email } from "../formValidations";
import { phoneMask } from "../formMasks";
import FormActions from "../layout/FormActions";

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
            type="tel"
            fieldWidth="six"
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
        <FormActions
          backPath="/admins"
          pristine={this.props.pristine}
          submitting={this.props.submitting}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "adminForm"
})(AdminForm);
