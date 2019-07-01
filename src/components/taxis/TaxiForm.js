import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { required, email, number } from "../formValidations";
import { phoneMask, cpfMask } from "../formMasks";
import { renderInput } from "../formHelpers";
import FormActions from "../layout/FormActions";

class TaxiForm extends Component {
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
            component={renderInput}
            label="SMTT"
            type="number"
            fieldWidth="four"
            validate={[required, number]}
          />
          <Field
            name="email"
            component={renderInput}
            label="E-mail"
            type="email"
            fieldWidth="twelve"
            validate={[required, email]}
          />
        </div>
        <div className="fields">
          <Field
            name="cpf"
            component={renderInput}
            label="CPF"
            type="text"
            fieldWidth="ten"
            validate={[required]}
            {...cpfMask}
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
          backPath="/taxis"
          pristine={this.props.pristine}
          submitting={this.props.submitting}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "taxiForm"
})(TaxiForm);
