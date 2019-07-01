import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { required, email } from "../formValidations";
import { phoneMask } from "../formMasks";
import FormActions from "../layout/FormActions";
import { renderInput } from "../formHelpers";

class AdminForm extends Component {
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
          component={renderInput}
          label="Nome"
          type="text"
          fieldWidth="sixteen"
          validate={required}
        />
        <div className="fields">
          <Field
            name="email"
            component={renderInput}
            label="E-mail"
            type="email"
            fieldWidth="ten"
            validate={[required, email]}
          />

          <Field
            name="phone"
            component={renderInput}
            label="Telefone"
            type="tel"
            fieldWidth="six"
            {...phoneMask}
          />
        </div>
        <div className="fields">
          <Field
            name="password"
            component={renderInput}
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
